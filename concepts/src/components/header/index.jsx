import React from "react";
import BackToHome from "../backToHome";
import Title from "../common/title";

const Header = ({ title, page = "Home", toPage = "/" }) => {
  return (
    <header>
      <BackToHome page={page} toPage={toPage} />
      <Title title={title} />
    </header>
  );
};

export default Header;
