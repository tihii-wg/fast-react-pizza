import React from "react";

import { formatCurrency } from "../../util/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, name, quantity, totalPrice } = item;

  function handleClick() {
    dispatch(deleteItem(id));
    console.log("delete");
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-bold">
          {formatCurrency(totalPrice)}
        </p>
        <Button handleClick={handleClick} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
