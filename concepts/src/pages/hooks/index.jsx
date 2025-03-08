import React from "react";
import { Link } from "react-router-dom";

export const Hooks = () => {
  return (
    <>
      <h4>Hooks !</h4>
      <ul>
        <li>
          <Link to="/usememo">Use Memo</Link>
        </li>
        <li>
          <Link to="/usecallback">Use Callback</Link>
        </li>
        <li>
          <Link to="/usecontext">Use Context</Link>
        </li>
      </ul>
    </>
  );
};
