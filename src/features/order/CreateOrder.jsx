// eslint-disable-next-line no-unused-vars
import React from "react";

import { createOrder } from "../../services/apiRestaurant";
import {
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { claerCart, getTotalPizzaPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../util/helpers";
import { useState } from "react";
import store from "../../store";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const [withPriority, setWithPriority] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { userName, position, loading, address, error } = useSelector(
    (state) => state.user
  );
  const isLoading = loading === "loading";
  const totalCartPrice = useSelector(getTotalPizzaPrice);
  const priorityPrice = totalCartPrice * 0.2;
  const totaPrice = totalCartPrice + priorityPrice;
  if (!cart.length) return <EmptyCart />;

  console.log(error);

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let's go!
      </h2>

      <Form method="post">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            defaultValue={userName}
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input w-full"
              type="tel"
              name="phone"
              required
            />
            {formErrors && (
              <p className="mt-2 rounded-full bg-red-100 px-4 py-2.5 text-xs text-red-600 sm:py-3">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              disabled={isLoading}
              className="input w-full"
              type="text"
              name="address"
              required
            />
            {error && (
              <p className="mt-2 rounded-full bg-red-100 px-4 py-2.5 text-xs text-red-600 sm:py-3">
                {error}
              </p>
            )}
          </div>

          <span className="absolute right-1 top-[35px] sm:top-[3px] md:top-[5px]">
            {!position?.latitude && !position?.longitude && (
              <Button
                defaultValue={address}
                disabled={isLoading}
                type="small"
                handleClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}>
                Get position
              </Button>
            )}
          </span>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>
        <div>
          <input
            type="hidden"
            name="cart"
            value={JSON.stringify(cart)}
          />

          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Processing.."
              : `Order now from ${formatCurrency(totaPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Must be a valid number for getting yuor otder!";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(claerCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
