// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function ButtonDelete({ id }) {
  const dispatch = useDispatch();
  return (
    <Button handleClick={() => dispatch(deleteItem(id))} type="small">
      Delete
    </Button>
  );
}

export default ButtonDelete;
