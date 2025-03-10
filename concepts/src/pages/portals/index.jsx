import React, { useState } from "react";
import Modal from "../../components/common/modal";
import Header from "../../components/header";

const Portals = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      <Header />
      <div>
        <button onClick={() => setIsModalOpened(true)}>Open Model</button>
        <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
          <form className="loginForm" onSubmit={() => setIsModalOpened(false)}>
            <section>
              <label>Email:</label>
              <input type="text" name="username" />
            </section>
            <section>
              <label>Password:</label>
              <input type="password" name="username" />
            </section>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Portals;
