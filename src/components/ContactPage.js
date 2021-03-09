import React, { useState } from 'react';
import ContactForm from './ContactForm';
import "./style.css";
import { Link, useLocation } from "react-router-dom";


function SearchPage() {

  return (
    <div className="hero">
      <div className="header">
        <div className="row">
          <div className="col-12">
            <Link to="/" className="navbar-brand">SB</Link>
          </div>
        </div>
      </div>

      <ContactForm />

        
    </div>

  );
}

export default SearchPage;