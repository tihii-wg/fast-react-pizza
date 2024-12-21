// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Link } from 'react-router-dom';
import SerchOrder from './SerchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SerchOrder />
      <UserName />
    </header>
  );
}

export default Header;
