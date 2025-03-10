import React from "react";
import { Link } from "react-router-dom";
import { Hooks } from "../hooks";

const Home = () => {
  return (
    <div className="home">
      <h3>React concepts with Examples</h3>
      <nav className="homeNav">
        <ul>
          <li>
            <Link to="/lifitingstate">Lifting State Up</Link>
          </li>
          <li>
            <Link to="/portals">React Portals</Link>
          </li>
          <li>
            <Link to="/lazysuspense">Lazy & Suspense</Link>
          </li>
          <li>
            <Link to="/hooks">Built-in React Hooks</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
