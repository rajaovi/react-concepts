import React from "react";
import { Link } from "react-router-dom";
import { Hooks } from "../hooks";

const Home = () => {
  return (
    <div className="home">
      <h3>Click any Concepts !</h3>
      <nav className="homeNav">
        <ul>
          <li>
            <Link to="/lifitingstate">Lifting State Up</Link>
          </li>
          <li>
            <Hooks />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
