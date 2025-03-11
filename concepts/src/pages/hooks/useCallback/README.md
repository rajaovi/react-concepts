## useCallBack Hook
`useCallback` hook in React is a built-in hook that helps you optimize the performance of your components by memoizing callback functions. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is particularly useful in preventing unnecessary re-renders of child components that rely on these callback functions.

##### Key Features of useCallback
- **Memoization:** `useCallback` memoizes the function, meaning it will return the same function instance unless one of its dependencies changes. This can help avoid unnecessary re-renders of child components that depend on the callback.
- **Performance Optimization:** By preventing the creation of new function instances on every render, useCallback can help improve performance, especially in components that render frequently or have expensive rendering processes.
- **Dependency Array:** Similar to useEffect, `useCallback` takes a dependency array as its second argument. The memoized function will only be recreated if one of the dependencies in this array changes.

##### When to Use useCallback
- **Passing Callbacks to Child Components:** When you pass a callback function to a child component that is wrapped in `React.memo`, using `useCallback` can prevent the child from re-rendering unnecessarily.
- **Event Handlers:** When you have event handlers that are defined inside a component and you want to ensure they are not recreated on every render.
- **Performance Optimization:** In performance-sensitive applications where function creation is a bottleneck.


#### Example

```
// Parent changes won't affect child untill there was an change in props or state of parent.
// addtocart is in parent
const addToCart = useCallback(() => {
  setCart(cart + 1);
}, [cart]);
 
//Button is in child  
<button onClick={addToCart}>Add to Cart</button>

```

##### Refer Code
- [index](./index.jsx)