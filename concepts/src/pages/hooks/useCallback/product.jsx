import { memo } from "react";

const Product = memo(({ name, addToCart }) => {
  console.log(`${name} Prod component re-renderd`);
  return (
    <div className="product">
      <h1>{name}</h1>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
});

export default Product;
