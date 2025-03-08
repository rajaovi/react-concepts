import React, { useState } from "react";

export default function PropDrilling() {
  const [name] = useState("React Prop Drilling");
  return (
    <div>
      <h4>Component 1: {name}</h4>
      <Component1 name={name} />
    </div>
  );
}

function Component1({ name }) {
  return (
    <>
      <h4>Component 2</h4>
      <Component2 name={name} />
    </>
  );
}

function Component2({ name }) {
  return (
    <>
      <h4>Component 3</h4>
      <Component3 name={name} />
    </>
  );
}

function Component3({ name }) {
  return (
    <>
      <h4>Component 4</h4>
      <Component4 name={name} />
    </>
  );
}

function Component4({ name }) {
  return (
    <>
      <h4>Component 4</h4>
      <Component5 name={name} />
    </>
  );
}

function Component5({ name }) {
  return (
    <>
      <h4>Component 5 : {name}</h4>
    </>
  );
}
