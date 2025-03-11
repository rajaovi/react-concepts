import React, { useState, useRef } from "react";
import Header from "../../components/header";

export default function LiftingState() {
  const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);
  return (
    <>
      <Header title="Lifting State Up" />
      <div>
        <TodoCount todos={todos} />
        <ToDoList todos={todos} />
        <AddToDo setTodos={setTodos} />
      </div>
    </>
  );
}

const TodoCount = ({ todos }) => {
  return <div>Total number of Todos: {todos.length}</div>;
};

const ToDoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

const AddToDo = ({ setTodos }) => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((pre) => [...pre, inputRef.current.value]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
