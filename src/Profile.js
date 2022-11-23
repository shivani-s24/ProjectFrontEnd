import React from "react";
import AuthService from "./Services/auth-service";
import './App.css';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div class='profilebg'>
    <div class="Profilebox">

        <h3>
        Profile: <strong>{currentUser.username}</strong> 
        </h3>

      {/* <p><img id='vnvimg' width={350}
          height={430} src="./Profile"></img></p> */}
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p> */}
      <p>
        <strong>Id:</strong> {currentUser.id}
        </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      {/* <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
    </div>
  );
};

export default Profile;