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

function Component2() {
  return (
    <>
      <h4>Component 2</h4>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h4>Component 3</h4>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h4>Component 4</h4>
      <Component5 />
    </>
  );
}

function Component5() {
  const name = useContext(UserContext);
  return (
    <>
      <h4>{`Component 5 : ${name}`}</h4>
    </>
  );
}
