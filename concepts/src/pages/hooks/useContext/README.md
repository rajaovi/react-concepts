# Use Context
`useContext` is a React Hook that allows you to access the context values in a functional component. It is part of the React Context API, which provides a way to share values (like state or functions) between components without having to pass props down manually at every level of the component tree.

#### Key Features of useContext:
- **Context Provider:** To use `useContext`, you first need to create a context using React.createContext(). This context will have a Provider component that wraps the part of your component tree where you want the context to be accessible.
- **Accessing Context:** Inside a functional component, you can call `useContext(MyContext)` to access the current value of the context. This value will be whatever is provided by the nearest matching Provider above it in the component tree.
- **Reactivity:** When the context value changes, any component that uses `useContext` will automatically re-render with the new value.
- **Syntax:** `const value = useContext(MyContext);`

#### When to Use useContext:
- **Global State Management:** When you have global state or configuration that needs to be accessed by many components at different levels of the component tree.
- **Avoid Prop Drilling:** When you want to avoid passing props through many layers of components (known as "prop drilling")
- **Theming and Localization:** Common use cases include theming, localization, and user authentication.

[Check Propdrilling Example](propDrilling.jsx)
#### Example
```
import React, { createContext, useState, useContext } from "react";
const UserContext = createContext();

export default function AvoidPropDrilling() {
  const [name] = useState("Avoiding Prop Drilling");
  return (
    <UserContext.Provider value={name}>
      <Component1 />
    </UserContext.Provider>
  );
}
function Component1() {
  return (
    <div>
      <h4>Component 1</h4>
      <Component2 />
    </div>
  );
}
//Component2
//Component3
//Component4

function Component5() {
  const name = useContext(UserContext);
  return (
    <>
      <h4>{`Component 5 : ${name}`}</h4>
    </>
  );
}
```
[Avoding Propdrilling Example](avoidPropDrilling.jsx)