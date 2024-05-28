import React from "react";
import "../styling/Profile.css";
import me from "../styling/images/me.jpg";
import git from "../styling/images/github.png";
import linkedin from "../styling/images/linkedin.png";
import { Tilt } from "react-tilt";
import arrow from "../styling/images/arrowdown.png";
import {Link} from 'react-scroll'
import { ssrImportKey } from "vite/runtime";
function Profile() {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 45, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div id="profile">
      <Link spy={true} smooth={true} offset={-50} duration={500} to="about">
        <img id="arrow" src={arrow} />
      </Link>
      <Tilt options={defaultOptions} id="imagee">
        <img id="imagee" src={me} />
      </Tilt>
      <div id="profiletext">
        <p id="helo">Heloo, I am</p>
        <p id="name">Ketan Sharma</p>
        <p id="role">async-Developer</p>
        <div id="butons">
          <a href="resumebest.pdf" download  id="same" style={{ backgroundColor: "whitesmoke" }}>
            Resume
          </a>
          <button style={{ color: "whitesmoke" }} id="same">
            <Link spy={true} smooth={true} offset={-50} duration={500} to="contact">
              Contact
            </Link>
          </button>
        </div>
        <div id="icons">
          <a href="https://github.com/ketansharma22">
            <img id="href" src={git} />
          </a>
          <a href="https://www.linkedin.com/in/ketansharma22/">
            <img id="href" src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
