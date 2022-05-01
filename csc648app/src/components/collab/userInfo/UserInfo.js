import React from "react";
import UserPhoto from "./userPhoto.png";
import "./UserInfo.css";
function UserInfo(props) {
  return (
    <div className="userInfo">
      <div className="userImage">
        <img src={UserPhoto} className="userPhoto" />
      </div>
      <div className="userNameAndEmail">
        <div className="user-name">
          <h6 className="userName">{props.name}</h6>
        </div>
        <div className="user-email">
          <h7 className="userEmail">{props.email}</h7>
        </div>
      </div>
      <div className="typeOfAccess">
        <select className="accessDropDown">
          <option value="Editor">Editor</option>
          <option value="Commentor">Commentor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>
    </div>
  );
}

export default UserInfo;
