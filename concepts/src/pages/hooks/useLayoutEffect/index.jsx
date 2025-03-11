import React, { useLayoutEffect, useState } from "react";
import Header from "../../../components/header";

const userIds = [1, 2];

const UseLayoutEffect = () => {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(false);

  // This while slow down the rendering
  let now = performance.now();
  while (performance.now() - now < 200) {
    // skip
  }

  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId);
    setUserId(otherId);
  };

  return (
    <>
      <Header title="useLayoutEffect" page="Hooks" toPage="/hooks" />
      <div>
        <p>userId: {userId}</p>
        <p>isAdmin: {isAdmin ? "true" : "false"}</p>
        <button onClick={handleChange}>Change User</button>
      </div>
    </>
  );
};

export default UseLayoutEffect;
