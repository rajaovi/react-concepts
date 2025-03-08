## useMemo Hook

useMemo cache the result of a calculation between renders. It's used to optimize performance by preventing unnecessary recalculations of expensive values.

- It Optimize the performance of your React application by memoizing expensive computations. Memoization is the process of caching the results of a function call based on its input parameters.
- The useMemo hook takes two arguments: A function that performs the calculation and An array of dependencies.
- The hook will only recalculate the value when one of the dependencies has changed. Otherwise, it will return the cached value from the previous render.

#### Here numberDouble for huge calculation
```
const numberDouble = useMemo(() => {
  return loopFunc(number);
},[number]);

function loopFunc(num) { 
  console.log("Loop Function");
  for (let i = 0; i < 1000000; i++) { /* empty */ }
  return num * 2;
}
```
#### Here useEffect will render everytime when the click happens. By adding useMemo it won't render again untill there was a change in themeStyle
```
const themeStyle = useMemo(() => {
  return {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }
},[dark]);

useEffect(() => {
   console.log("Theme Changed");
},[themeStyle])
```

