// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return null;

  return (
    <div className="hidden text-sm font-semibold sm:block">
      {userName}
    </div>
  );
}
export default UserName;
