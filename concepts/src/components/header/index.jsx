import React from "react";
import BackToHome from "../backToHome";
import Title from "../title";

const Header = ({ title }) => {
  return (
    <header>
      <BackToHome />
      <Title title={title} />
    </header>
  );
};

export default Header;
