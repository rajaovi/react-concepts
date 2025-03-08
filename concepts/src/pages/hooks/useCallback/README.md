## useCallBack Hook

useCallback is a React Hook that memoizes a callback function. It returns a memoized version of the callback that only changes if one of its dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary render

#### addtoCart function is in Parent and button click is in child.

- Parent changes won't affect child untill there was an change in props or state of parent.

```
const addToCart = useCallback(() => {
  setCart(cart + 1);
}, [cart]);
 
<button onClick={addToCart}>Add to Cart</button>

```

