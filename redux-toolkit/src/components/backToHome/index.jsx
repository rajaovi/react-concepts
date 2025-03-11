import React from "react";
import { Link } from "react-router-dom";

const BackToHome = ({ page, toPage }) => {
  return (
    <>
      <Link className="backToHome" to={toPage}>
        &larr; Back to {page} page
      </Link>
    </>
  );
};

export default BackToHome;
