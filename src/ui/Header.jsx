// eslint-disable-next-line no-unused-vars
import React from "react";

import { Link } from "react-router-dom";
import SerchOrder from "./SerchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-3 py-4 font-sans uppercase sm:px-8">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SerchOrder />
      <UserName />
    </header>
  );
}

export default Header;
