import React, { useState } from "react";
import Modal from "react-modal";
import addIcon from "./addusericon.png";
import "./collab.css";

/*to define app element on our Modal import*/
Modal.setAppElement("#root");

function Collab() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      {/* once collab button is click, a modal will be rendered on the entire webpage */}
      <button onClick={() => setModalIsOpen(true)} className="collab">
        <img src={addIcon} className="addicon" alt="addicon" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {},
          content: {
            width: "400px",
            height: "200px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          },
        }}
      >
        <h2>Share with people and groups</h2>
        <div>
          <input type="text" placeholder="Add people and groups" alt="search" />
        </div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Done</button>
        </div>
      </Modal>
    </div>
  );
}
export default Collab;
