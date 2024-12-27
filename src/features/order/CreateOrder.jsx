// eslint-disable-next-line no-unused-vars
import React from 'react';

import { createOrder } from '../../services/apiRestaurant';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="post">
        <div>
          <label>First Name</label>
          <input
            className="text-smn w-full rounded-full border border-stone-200 px-4 py-2 text-sm placeholder-stone-400 transition-all duration-500 focus:outline-none focus:ring focus:ring-yellow-300"
            type="text"
            name="customer"
            required
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input
              className="text-smn w-full rounded-full border border-stone-200 px-4 py-2 text-sm placeholder-stone-400 transition-all duration-500 focus:outline-none focus:ring focus:ring-yellow-300"
              type="tel"
              name="phone"
              required
            />
          </div>
          {formErrors && formErrors.phone}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              className="text-smn w-full rounded-full border border-stone-200 px-4 py-2 text-sm placeholder-stone-400 transition-all duration-500 focus:outline-none focus:ring focus:ring-yellow-300"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div>
          <input
            className="h-5 w-5 accent-yellow-400 focus:outline-none focus:ring focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="duration-600 inline-block rounded-3xl border-none bg-yellow-400 px-3 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Processing..' : 'Order now'}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };
  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = 'Must be a valid number';

  if (Object.keys(errors).length > 0) return errors;

  // const newOrder = await createOrder(order);
  // return redirect(`/order/${newOrder.id}`);

  return null;
}

export default CreateOrder;
