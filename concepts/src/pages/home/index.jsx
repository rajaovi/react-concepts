import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lifitingstate">Lifting State Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
