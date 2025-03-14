import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h3>React version 19 concepts with Examples</h3>
      <ul>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
        <li>
          <Link>Server Components</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
