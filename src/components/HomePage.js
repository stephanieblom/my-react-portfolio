import React,{ useRef } from "react";
import profilePic from './Assets-Images/IMG_0589.JPG';
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function HomePage() {
    const aboutMe = useRef(null);

    function executeScrollAboutMe (){
        console.log(`Calling scroll function About Me`)
        
        window.scrollTo(0, aboutMe.current.offsetTop+700)  
       }

    return (
        
        <div className="hero">
             <div className="header">
                <div className="row">
                    <div className="col-12">
                    <Link to="/" className="navbar-brand">SB</Link>
                    </div>
                </div>
            </div>
        <div className="row">
        <a href="#" class="photo">
                <img className="img" src={profilePic} />
            <div class="glow-wrap">
                <i class="glow"></i>
            </div>
        </a>

        <a onClick={executeScrollAboutMe} id="author">About me</a>
        </div>
        <div ref={aboutMe}>

        </div>
            <div className="row">
            <div href="#" class="aboutMe">
                    <p>	Hey there! My name is Stephanie Blom. I am a Full-Stack Web Developer with skills in HTML5, CSS3, JavaScript, jQuery, C++, Python, Java, Bootstrap, Node.js, React.js, Express.js, MongoDB, MySQL, and much more. Feel free to browse around my profile and see what I have been working on since beginning my journey with the University of Toronto SCS Coding Bootcamp. I have learned to create responsive, mobile first web applications. </p>
                    <p>I graduated as an Engineer from the University of Western Ontario in 2019. During my time at Western I was a member of the Western Formula Racing Team where we would design, build, and race a Formula 1 style racecar each year. Being on this team allowed me to develop strong problem solving skills along with allowing me to exercise my creativity and curiosity. I have always been a curious individual which ultimately led me into engineering and more specifically technology. </p>
                <div class="glow-wrap">
                    <i class="glow"></i>
                </div>
            </div>
        </div>

    </div>
    );
}

export default HomePage;