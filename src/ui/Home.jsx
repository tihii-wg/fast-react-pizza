// eslint-disable-next-line no-unused-vars
import React from "react";

import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { useSelector } from "react-redux";

function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 px-4 text-center sm:text-xl md:text-2xl">
      <h1 className="mb-10 font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
