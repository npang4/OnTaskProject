import React from "react";
import addIcon from "./addusericon.png";
import "./collab.css";

function Collab() {
  return (
    <button onClick={alert} className="collab">
      <img src={addIcon} className="addicon" alt="addicon" />
    </button>
  );
}
export default Collab;
