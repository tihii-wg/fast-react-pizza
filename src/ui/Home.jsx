// eslint-disable-next-line no-unused-vars
import React from 'react';

import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:text-xl md:text-2xl">
      <h1 className="mb-10 font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
