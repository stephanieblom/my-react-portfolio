import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';


function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path={["/Updated-React-Portfolio","/","/home"]} component={HomePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact" component={ContactPage} />
      </div>
    </Router>
  );
}

export default App;
