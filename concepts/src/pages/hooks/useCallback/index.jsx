import React, { useState } from "react";
import BackToHome from "../../../components/backToHome";
import Product from "./product";
import "./index.css";

const UseCallBack = () => {
  const [prod] = useState(["Prod 1", "Prod 2", "Prod 3"]);
  return (
    <>
      <BackToHome />
      <h4>useCallback</h4>
      <div className="product-wrap">
        {prod.map((val, ind) => {
          return <Product name={val} key={ind} />;
        })}
      </div>
    </>
  );
};

export default UseCallBack;
