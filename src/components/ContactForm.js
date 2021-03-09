import React, { useState } from 'react';

function ContactForm() {
 
  return (
    <div className="container">
         <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" class="form-control" id="Name" placeholder="First & Last Name" />
            </div>
            
            <div class="form-group">
              <label for="emailLabel">Email address</label>
              <input type="email" class="form-control" id="Email" placeholder="name@example.com" />
            </div>
    
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="Message" rows="3"></textarea>
            </div>
            <br />
    
            <button type="button" id="submit" class="btn">Lets Connect!</button>
            <br />
            <br />
            <div >
                <a href="https://www.linkedin.com/in/stephanie-blom/"><i class="fa fa-3x fa-linkedin-square" aria-hidden="true"></i></a>
            </div>
        </form>
    </div>
  );
}

export default ContactForm;

