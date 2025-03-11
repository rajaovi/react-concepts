import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h3>React concepts with Examples</h3>
      <nav className="homeNav">
        <ul>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
