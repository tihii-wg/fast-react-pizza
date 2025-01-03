// eslint-disable-next-line no-unused-vars
import React from "react";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type, handleClick }) {
  const base =
    "duration-600 inline-block text-sm rounded-3xl border-none bg-yellow-400   font-semibold  uppercase tracking-wide  text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none   focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const style = {
    primary: base + " px-4 py-3 md:py-4 md:px-6",
    small: base + "  py-2 px-4 md:py-2.5 text-xs md:px-5",
    secondary:
      "duration-600 inline-block  text-sm rounded-3xl border-stone-300  border-2  font-semibold  uppercase tracking-wide  text-stone-400 transition-colors hover:bg-stone-300 focus:outline-none  hover:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:py-3.5 md:px-6",
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
