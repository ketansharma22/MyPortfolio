import React, { useRef, useState } from "react";
import "../styling/Contact.css";
import Alert from '@mui/material/Alert';
import mail from '../styling/images/mail.png'
import linkedin from '../styling/images/linkedin.png'
import arrow from "../styling/images/arrowdown.png";
import {Link} from 'react-scroll'
import toast from "react-hot-toast";
function Contact() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[data,setData]=useState({
    name:"",
    email:"",
  })
  const [error,setError]=useState(false);
  function handleSubmit(e){
    e.preventDefault()
    // setData({name:name,email:email})
    console.log(data);
    toast.success("I'll Surely Catch up to you!!")
    setData({
      name:"",
      email:"",
    })
    
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevUser) => ({ ...prevUser, [name]: value }));
    

  };
  return (
    
    <div id="contact">
    <Link spy={true} smooth={true} offset={-50} duration={500} to="profile">
        <img id="arrowcontact" src={arrow} />
      </Link>
      <div id="lefthead">Contact Me</div>
      <form id="rightbox" onSubmit={handleSubmit}>
        <div id="inputlabel">
          <label>Email</label>
          <input  required={true} type="email" name="email" value={data.email} onChange={handleChange} />
        </div>

        <div id="inputlabel">
          <label>Name</label>
          <input  type="name" name="name" value={data.name} onChange={handleChange}/>
        </div>
        
        <button id="connect"  type="submit"> Connect !</button>{error && <Alert severity="success">Let's Catch Up Soon</Alert>}
      </form>
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
