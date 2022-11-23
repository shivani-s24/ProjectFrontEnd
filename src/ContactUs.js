import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export default function() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    query: "",
  });

  const { username, email,  query} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
   e.preventDefault();
    await axios.post("http://localhost:8081/api/test/contact/save", user);
    navigate("/home");
  };

  return (
        <div>
          <div id='cusrow'>
          <h1 class='cusrowh1'>Visit Us Today</h1>

          <div class='left'>
            <h1>Opening Hours</h1>
            <p>Monday to Friday - 9AM to 9PM</p>
            <p>Saturday and Sunday - 9AM to 2PM</p>
          </div>
          <div class='right'>
            <h1>Get In Touch</h1>
            <p>#74/77, ABC Colony, hyderabad IN</p>
            <p>citylights@gmail.com</p>
            <p>9876543210</p>
          </div>
          </div>

        <div id='cus'>
          <h2>Write here we will reach you out soon!</h2>
          <div class ='border'></div>
          <form onSubmit={(e) => onSubmit(e)} id='cusform'>
            <div>
              <br></br>
              <input
                type="text"
                class='contacttext'
                placeholder="Enter your User name"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
            <br></br>
              <input
                type="text"
                class='contacttext'
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <br></br>
              <input
                type="text"
                class='contacttext'
                placeholder="Write your enquiry details"
                name="query"
                value={query}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" class='formbtn'>
              Submit
            </button>
            <button class='cancelform'>
            <Link to="/home" class='cancelformL'>
              Cancel
            </Link>
            </button>
          </form>
        </div>
        </div>

  );
}