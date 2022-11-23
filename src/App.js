import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./Services/auth-service";
import Login from "./Login";
import Register from "./Register";
import { HomeCom } from "./HomeCom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Homepage1 from "./Home";
import Profile from "./Profile";
import Protected from "./Protected";
import ContactView from "./AdminBoard";
const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  return (
    <div>

          

        {currentUser ? (
          <div>
            <div id='show_bg_2'>
        <section>
        <a href="/login" onClick={logOut}><img id='logoimg' width={50} src="./mylogo.png"/>
              </a>


            <h1 id='title'>CITIYLIGHTS DEVELOPERS & BUILDERS LTD <br></br>
            <p id='slogan'>All The Way Home,Love Where You Live!</p></h1>
        </section>
    </div>
          <nav class="firstpageclr">
          <div class="loginreg">

              <Link to={"/Profile"} id="profilebtn">
                Profile
              </Link>

              {showAdminBoard && (
              <Link to={"/adminboard"} id='adminboard'>
                AdminBoard
              </Link>
          )} 

            <Link id='homepage' to='/home'>Homepage</Link>
            <Link id='aboutus' to='/aboutus'>AboutUs</Link>
            <Link id='contactus' to='/contactus'>ContactUs</Link>

              


          </div>
          </nav>
          </div>
        
        ) : (
          <nav class="firstpageclr">
          <div>


              <Link to={"/login"} id="fpbtn1">
                Login
              </Link>


              <Link to="/register" id="fpbtn2">
                Register
              </Link>


          </div>
        </nav>

        )}
        

      <div>
        <Routes>
          {/* <Route path="/" element={<HomeCom/>} /> */}
          <Route path="/home" element={<Homepage1/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/adminboard" element={<ContactView/>}/>
          <Route path="/register" element={<Protected Component = {Register}/>} />
          <Route path="/login" element={<Protected Component = {Login}/>} />
        </Routes>
      </div>
      <div class='footer'>
        #Citylights © 2021 
      </div>
    </div>
  );
};

export default App;