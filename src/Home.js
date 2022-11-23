import  { useState, useEffect } from "react";
import UserService from "./Services/user-service";
import React from 'react';

const Homepage1 = (props) => {
    return (
        <div>
            <div id='lol'>
          <h3>Love Where You Live</h3>
          <p> When we say "Love Where You Live", we are simply assuring you the affectionate, almost familial connection that can form between you and where you live.</p>
          </div>
          <br></br>

          <div id='visionbg'>
            <br></br>
          <img id='vnvimg' width={350}
          height={430} src="./vnvpic.png"></img>
          
            <div id='vnv'>
            <h2>VISION</h2>
            <hr id='vnvhr'></hr>
            <p id='para'>To be the most trusted name in residential and high-end commercial space. To develop and deliver iconic, effective living-spaces, work-spaces and entertainment venues that meet the needs of the future. To win the leadership position for ourselves in the real estate business, and go strong for times to come. We aim to develop spaces for generations seeking the joy of living, working, growing and celebrating.</p>

           <h2>VALUES</h2>
           <hr id='vnvhr'></hr>
           <p id='para'>Citylights stands for quality and trustworthiness above all else. We are customer-focused and committed to deliver on our promises, always and on time. From modern day urban residences that match the world class living our clients aspire, to commercial and recreational destinations that are built to deliver excellence, we create landmark addresses loaded with the best of amenities.</p>
            </div>
            <br></br>

          </div>

<br></br>
          <section id='testmonial'>
            <div>
                <h2 id='tt'>TESTIMONIALS</h2>
              
            </div>
            <div class='testimonialrow'>
                <div class='testimonialcol'>
                    <div class="user">
                        <img src="./mylogo.png"></img>
                    <div class='username'>
                        <h4>Laura, Dewey</h4>
                    </div>
                    </div>
                    <p>In sum, our experience with Citylights Builders: met deadlines, easy to work with, helpful in making difficult decisions, respectful of our unique wishes, excellent attention to detail, kind and welcoming workers. From the beginning to the end, we love our house and are completely satisfied. We highly recommend Citylights Builders with enthusiasm, and without reservation.</p>
                </div>
                <div class='testimonialcol'>
                    <div class="user">
                        <img src="./mylogo.png"></img>
                    <div class='username'>
                        <h4>Sarah & Jayson, Mahomet</h4>
                    </div>
                    </div>
                    <p>Citylights Builders were great to work with throughout the entire process of building our new home. They were on time, within the budget, and listened to our needs. The Energy Star Certification was an added benefit. They are a quality builder. We highly recommend Citylights Builders with enthusiasm, and without reservation.</p>
                </div>
                <div class='testimonialcol'>
                    <div class="user">
                        <img src="./mylogo.png"></img>
                    <div class='username'>
                        <h4>Samantha</h4>
                    </div>
                    </div>
                    <p>I cannot speak highly enough of Citylights Builders! Excellent communication, great attention to detail, and they don't cut corners. A quality builder that you can trust! We highly recommend Citylights Builders with enthusiasm, and without reservation.</p>
                </div>
                
            </div>
          </section>
        </div>
    )
}

export default Homepage1;
