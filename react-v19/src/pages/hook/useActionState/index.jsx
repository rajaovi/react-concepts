import React, { useActionState } from "react";
import Header from "../../../component/header";

const UseActionState = () => {
  const [name, updateName, isPending] = useActionState(
    formAction,
    "Anonymous user"
  );

  function formAction(prevState, formData) {
    const newName = formData.get("name");
    return newName;
  }

  return (
    <>
      <Header title="Use Action State" page="Hooks" toPage="/hooks" />
      <div>
        <p>
          Current User: <span>{name}</span>
        </p>
        {
            isPending && <p>Loading...</p>
        }
        <form action={updateName}>
          <input type="text" name="name" placeholder="Enter name" required />
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default UseActionState;
