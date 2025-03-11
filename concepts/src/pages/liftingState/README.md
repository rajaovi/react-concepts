# Lifting State Up
When two are more components shares same state, then we can lift state up to a adjacent parent component. This is process is called lifting state up.

Here is an example of lifting state up

##### Parent
Here todos state is common used in child component, so we lift it up to parent component.
```
const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);
<div>
    <TodoCount todos={todos} />
    <ToDoList todos={todos} />
    <AddToDo setTodos={setTodos} />
</div>
```
##### Todo count
Using parent state
```
const TodoCount = ({ todos }) => {
  return <div>Total number of Todos: {todos.length}</div>;
};
```

##### To do list
This was the state moved from this component to adjacent parent - `const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);`
```
const ToDoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};
```

##### Add to do
```
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

```

