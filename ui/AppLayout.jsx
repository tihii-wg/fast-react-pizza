// eslint-disable-next-line no-unused-vars
import React from "react";

import Header from "./Header";
import CartOverview from "../src/features/cart/CartOverview";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />
      <main><Outlet /></main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
