import React from "react";
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";

const Redux = () => {
  const [userName, setUserName] = React.useState("");
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  console.log("Users", users);

  const addUser = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_USER", payload: userName });
  };
  return (
    <>
      <Header title="Redux" />
      <form>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={addUser} type="submit">
          Add User
        </button>
      </form>
      <ul>
        {users && users.map((user, ind) => {
          return <li key={ind}>{user}</li>;
        })}
      </ul>
    </>
  );
};

export default Redux;
