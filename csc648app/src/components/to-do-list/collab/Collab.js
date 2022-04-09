import React, { useState } from "react";
import Modal from "react-modal";
import addIcon from "./addusericon.png";
import "./collab.css";
import UserInfo from "../userInfo/UserInfo";

/*to define app element on our Modal import*/
Modal.setAppElement("#root");

function Collab() {
  function handleChange(event) {
    console.log(event.target.value);
    setSearchEmail(event.target.value);
  }
  function handleAdd(event) {
    console.log("Submitted", searchEmail);
  }
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchEmail, setSearchEmail] = useState("");
  return (
    <div>
      {/* Collab Button */}
      <button onClick={() => setModalIsOpen(true)} className="collab">
        <img src={addIcon} className="addicon" alt="addicon" />
      </button>
      {/* Beginning of Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {},
          content: {
            width: "470px",
            height: "280px",
            margin: "auto",
          },
        }}
      >
        <h2>Share with people and groups</h2>
        {/* email search bar */}
        <div>
          <input
            type="text"
            placeholder="Add people and groups"
            alt="search"
            onChange={handleChange}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <div>
          <p>{searchEmail}</p>
        </div>
        {/* User Profile */}
        <div>
          <UserInfo />
        </div>
        {/*exit modal button*/}
        <div className="done">
          <button onClick={() => setModalIsOpen(false)}>Done</button>
        </div>
      </Modal>
    </div>
  );
}
export default Collab;
