// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../util/helpers";
import { Link } from "react-router-dom";
import {
  getTotalPizzaPrice,
  getTotalPizzaQuantity,
} from "./cartSlice";

function CartOverview() {
  const totalPizzaQuantity = useSelector(getTotalPizzaQuantity);
  const totalPizzaPrice = useSelector(getTotalPizzaPrice);

  if (!totalPizzaQuantity) return null;

  return (
    <div className="item-between flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:p-8 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalPizzaQuantity} pizzas</span>
        <span>{formatCurrency(totalPizzaPrice)}</span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
