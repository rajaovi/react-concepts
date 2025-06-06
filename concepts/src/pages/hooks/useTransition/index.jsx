import React, { useState, useTransition } from "react";
import Header from "../../../components/header";

const defaultList = [1, 2, 3, 4, 5, 6];
const listSize = 10000;

const UseTransition = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(defaultList);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
    const data = [];
    startTransition(() => {
      for (let i = 0; i < listSize; i++) {
        data[i] = value;
      }
      setList(data);
    });
  };

  return (
    <>
      <Header title="useTransition" page="Hooks" toPage="/hooks" />
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? (
        <h4>Loading</h4>
      ) : (
        list.map((item, index) => <div key={index}>Item: {item}</div>)
      )}
    </>
  );
};

export default UseTransition;
