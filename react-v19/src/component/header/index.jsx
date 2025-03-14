import React from "react";
import BackToHome from "../common/backToHome";

const Header = ({ title, page = "Home", toPage = "/" }) => {
  return (
    <header>
      <BackToHome page={page} toPage={toPage} />
      <h2>{title}</h2>
    </header>
  );
};

export default Header;
