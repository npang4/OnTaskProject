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
        <div className="userName">
          <h6>Jia Li</h6>
        </div>
        <div className="userEmail">
          <h7>jli89@mail.sfsu.edu</h7>
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
