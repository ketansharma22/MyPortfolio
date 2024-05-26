import React, { useState } from "react";
import "../styling/Contact.css";
import Alert from '@mui/material/Alert';
import mail from '../styling/images/mail.png'
import linkedin from '../styling/images/linkedin.png'
import arrow from "../styling/images/arrowdown.png";
import {Link} from 'react-scroll'
function Contact() {
  const [error,setError]=useState(false);
  function handleclick(){
    setError(true)
    
  }
  return (
    
    <div id="contact">
    <Link spy={true} smooth={true} offset={-50} duration={500} to="profile">
        <img id="arrowcontact" src={arrow} />
      </Link>
      <div id="lefthead">Contact Me</div>
      <div id="rightbox" >
        <div id="inputlabel">
          <label>Email</label>
          <input required={true} type="email" />
        </div>

        <div id="inputlabel">
          <label>Name</label>
          <input type="name" />
        </div>
        
        <button id="connect"  onClick={handleclick}> Connect !</button>{error && <Alert severity="success">Let's Catch Up Soon</Alert>}
      </div>
      <div id="lastbox">
        <div id="lastmainsame">
          <img id="icons" src={mail} />
          <a id='hreff' href="mailto:kanu220504@gmail.com">kanu220504@gmail.com</a>
        </div>
        <div id="lastmainsame">
          <img id="icons" src={linkedin} />
          <a id="hreff" href="https://www.linkedin.com/in/ketansharma22/">LinkedIn</a>
        </div>

      </div>
    </div>
  );
}

export default Contact;
