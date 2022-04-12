import React, { useState } from "react";
import Modal from "react-modal";
import addIcon from "./addusericon.png";
import "./collab.css";
import UserInfo from "./userInfo/UserInfo";
import email from "./userInfo/email";

/*to define app element on our Modal import*/
Modal.setAppElement("#root");

function Collab() {
  {
    /*Function for mapping out data from .js file*/
  }
  function createUserInfo(userProfile) {
    return (
      <UserInfo
        key={userProfile.id}
        name={userProfile.name}
        email={userProfile.email}
      />
    );
  }
  {
    /* This function stores the email that is input by the user */
  }
  function handleChange(event) {
    var error = document.getElementById("error");
    setSearchEmail(event.target.value);
    error.textContent = "";
  }
  {
    /*The function handles whether user is added or user is not found */
  }
  function handleAdd(event) {
    var error = document.getElementById("error");
    error.textContent = "User not found";
    error.style.color = "red";
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
        <div className="searchEmail">
          <input
            type="text"
            placeholder="Enter email"
            alt="search"
            onChange={handleChange}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <span id="error"></span>
        {/* User Profile */}
        <div>{email.map(createUserInfo)}</div>
        {/*exit modal button*/}
        <div className="done">
          <button onClick={() => setModalIsOpen(false)}>Done</button>
        </div>
      </Modal>
    </div>
  );
}
export default Collab;
