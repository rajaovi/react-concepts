import React from "react";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <>
      <Link className="backToHome" to="/">
        &larr; Back to Home
      </Link>
    </>
  );
};

export default BackToHome;
