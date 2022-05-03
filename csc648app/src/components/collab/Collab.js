import React, { useState } from "react";
import Modal from "react-modal";
import addIcon from "./addusericon.png";
import "./collab.css";
import UserInfo from "./userInfo/UserInfo";
import email from "./userInfo/email";

/*to define app element on our Modal import*/
//Modal.setAppElement("#root");

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
  const errorMsg = "Hello?";
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
      <button
        data-testid="mainbuttonT"
        onClick={() => setModalIsOpen(true)}
        className="collab"
      >
        <img src={addIcon} className="addicon" alt="addicon" />
      </button>
      {/* Beginning of Modal */}
      <Modal
        data-testId="modalT"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {},
          content: {
            width: "500px",
            height: "280px",
            margin: "auto",
            borderRadius: "12px",
          },
        }}
      >
        <div className="modal-collab-title">
          <img src={addIcon} className="addicon1" />
          <h3 className="modal-title">Share with people and groups</h3>
        </div>
        {/* email search bar */}
        <div className="searchEmail">
          <input
            className="search-email-box"
            type="text"
            placeholder="Enter email"
            alt="search"
            onChange={handleChange}
          />
          <button
            className="submit-email"
            id="submitEmail"
            data-testid="buttonT2"
            onClick={handleAdd}
          >
            Search
          </button>
        </div>
        <div data-testid="validEmailT" id="error" className="error-msg"></div>
        {/* User Profile */}
        <div>{email.map(createUserInfo)}</div>
        {/*exit modal button*/}
        <div className="done">
          <button
            data-testid="buttonT3"
            onClick={() => setModalIsOpen(false)}
            className="modal-done"
          >
            Done
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default Collab;
