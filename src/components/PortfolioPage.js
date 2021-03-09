import React from 'react';
import arrow from './Assets-Images/Arrow.jpeg';
import capstone from './Assets-Images/Capstone.jpg';
import car from './Assets-Images/February2020.jpg';
import { Link, useLocation } from "react-router-dom";
import "./portfolio.css";


function PortfolioPage() {

  const capstoneCard ={
    backgroundImage: `url(${capstone})`,
    // marginTop: '10px',
    backgroundPosition: '50% 0%',
  }

  const arrowCard ={
    backgroundImage: `url(${arrow})`,
    // marginTop: '10px',
    backgroundPosition: '50% 0%',
  }


    
  return (
    <div>
      <div className = "hero">
        <div className="header">
          <div className="row">
            <div className="col-12">
            <Link to="/" className="navbar-brand">SB</Link>
            </div>
          </div>
        </div>
        <br></br>
        <div className="container">
          <div className="row photo-row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card" style={capstoneCard}>
                <div className="overlay">
                  <div className = "items head">
                    <p>1st Place 2019 Western Mechanical Engineering Capstone</p>
                    <hr/>
                  </div>
                  <div className="items">
                    <i className="fa fa-2x fa-cogs"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card" style={arrowCard}>
                <div className="overlay">
                  <div className = "items head">
                    <p>Office IoT System Designed and Fabricated</p>
                    <hr/>
                  </div>
                  <div className ="items">
                    <i className ="fa fa-2x fa-microchip"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card" style={arrowCard}>
                <div className="overlay">
                  <div className = "items head">
                    <p>Office IoT System Designed and Fabricated</p>
                    <hr/>
                  </div>
                  <div className ="items">
                    <i className ="fa fa-2x fa-microchip"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default PortfolioPage;