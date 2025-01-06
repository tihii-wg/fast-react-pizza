// eslint-disable-next-line no-unused-vars
import React from "react";

import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItemQuantity,
  getCurrentQuantityById,
  incrementItemQuantity,
} from "./cartSlice";

function UpdateQuantityItem({ id }) {
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-5">
      <Button
        handleClick={() => dispatch(decrementItemQuantity(id))}
        type="round">
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        handleClick={() => dispatch(incrementItemQuantity(id))}
        type="round">
        +
      </Button>
    </div>
  );
}

export default UpdateQuantityItem;
