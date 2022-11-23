import React from 'react'
import './App.css'
import{ Routes,Route,Link} from 'react-router-dom';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Home from './Home';

export const HomeCom = () => {

  return (
    <div>
 

    <div id='show_bg_2'>
        <section>
        <a href="/login"><img id='logoimg' width={50} src="./mylogo.png"/></a>


            <h1 id='title'>CITIYLIGHTS DEVELOPERS & BUILDERS LTD <br></br>
            <p id='slogan'>All The Way Home,Love Where You Live!</p></h1>
        </section>
    </div>

        <div>

            <nav  id='navbar'>

            

            <Link id='homepage' to='/home'>Homepage</Link>
            <Link id='aboutus' to='/aboutus'>AboutUs</Link>
            <Link id='contactus' to='/contactus'>ContactUs</Link>
            {/* <Link id='contactView' to='/ContactView'>ContactView</Link> */}


            </nav>

            <Routes>

                <Route path='/home'element={<Home/>}></Route>
                <Route path='/aboutus'element={<AboutUs/>}></Route>              
                <Route path='/contactus'element={<ContactUs/>}></Route> 
                {/* <Route path='/ContactView' element={<ContactView/>}></Route> */}
            </Routes>

        </div>

       

       </div>


  )
}