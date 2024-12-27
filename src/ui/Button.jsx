import React from 'react';

import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to }) {
  const className =
    'duration-600 inline-block rounded-3xl border-none bg-yellow-400 px-3 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4';

  if (to)
    return (
      <Link className={className} to="/order/new">
        Order pizzas
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
