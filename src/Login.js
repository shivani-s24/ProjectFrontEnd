import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";

import AuthService from "./Services/auth-service";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div class="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

const Login = () => {
  let navigate = useNavigate();

  // const form = useRef();
  // const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // setMessage("");
    // setLoading(true);

    // form.current.validateAll();

  //  if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          // setLoading(false);
          // setMessage(resMessage);
        }
      );
  //  else {
  //     setLoading(false);
  //   }
  };

  return (
    <div class='firstpage'>
      <div>


        <form onSubmit={handleLogin} id='loginpage1'>
        
            <input
              type="text"
              placeholder="Enter Username"
              class="userdet"
              name="username"
              value={username}
              onChange={onChangeUsername}
              
            />
         

          
            <input
              type="password"
              placeholder="Enter Password"
              class="userdet"
              name="password"
              value={password}
              onChange={onChangePassword}
                          />
         

          
            <button id="loginbtn">
              
              <span>Login</span>
            </button>
          

          {/* {message && (
            <div class="">
              <div class="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )} */}
          {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
        </form>
      </div>
    </div>
  );
};

export default Login;