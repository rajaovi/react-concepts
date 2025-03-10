import React, { useCallback, useState } from "react";
import Product from "./product";
import "./index.css";
import Header from "../../../components/header";

const UseCallBack = () => {
  console.log("useCallBack component rendered");

  const [prod] = useState(["Prod 1", "Prod 2"]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // Non useCallback
  //   const addToCart = () => {
  //     setCart(cart + 1);
  //   };

  return (
    <>
      <Header title="useCallBack" page="Hooks" toPage="/hooks" />
      <div className="useCallBack">
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h3>Cart: {cart}</h3>
        <div className="product-wrap">
          {prod.map((val, ind) => {
            return <Product name={val} key={ind} addToCart={addToCart} />;
          })}
        </div>
      </div>
    </>
  );
};

export default UseCallBack;
