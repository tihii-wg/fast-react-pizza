// eslint-disable-next-line no-unused-vars
import React from 'react';

import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-10 text-xl font-semibold">
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
