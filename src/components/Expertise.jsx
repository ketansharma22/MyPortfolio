import React  from 'react'
import '../styling/Expertise.css'
import react from "../styling/images/react.webp";
import js from "../styling/images/js.svg";
import node from "../styling/images/node.svg";
import tailwind from "../styling/images/tailwind.png";
import html from "../styling/images/html5.svg";
import css from "../styling/images/css.svg";
import firebase from "../styling/images/firebase.png";
import git from "../styling/images/git.png";
import mysql from "../styling/images/mysql.png";
import redux from "../styling/images/redux.png";
import tick from '../styling/images/tick.png'
import py from '../styling/images/python.png'
import arrow from "../styling/images/arrowdown.png";
import {Link} from 'react-scroll'
import { useState } from 'react';
function Expertise() {
    const [selected, setSelected] = useState(null);
    const [descc, setDescc] = useState("");
    const [name, setName] = useState("Click icons to learn more ");
    const arr = [
        {
          id: 1,
          name: "Html",
          image: html,
          desc: "The foundation of the web, and I like to keep my structures sturdy. I've always said, Life without HTML is like writing a story without words.",
        },
        {
          id: 2,
          name: "Css",
          image: css,
          desc: "Styling isn't just for fashion; it's for websites too! My CSS skills are so sharp, I sometimes wonder if I missed my calling as a stylist.",
        },
        {
          id: 3,
          name: "Js",
          image: js,
          desc: "While some are searching for the meaning of life, I'm here searching for the missing semicolon. JS keeps me on my toes, ensuring I never miss a beat (or a bracket).",
        },
        {
          id: 4,
          name: "React",
          image: react,
          desc: "I like to think of myself as a bit 'reactive'. Thanks to React, I'm breaking UIs into components faster than you can say 'usestate()'",
        },
        {
          id: 5,
          name: "Firebase",
          image: firebase,
          desc: "Firebase literally fires up the project",
        },
        {
          id: 6,
          name: "Node",
          image: node,
          desc: "With Node.js in my toolkit, I don't just hang around the 'event loop.' I dive deep into the backend, ensuring everything runs smoothly. After all, why merely 'node' your head in appreciation when you can have a full-on back-end jam session? 🎸🖥️",
        },
        {
          id: 7,
          name: "TailwindCSS",
          image: tailwind,
          desc: "Some need a compass to navigate, I just need my Tailwind. Building responsive designs faster than the wind can blow.",
        },
        {
          id: 8,
          name: "Git",
          image: git,
          desc: "I'm so in sync with Git, every time I commit, even my coffee knows it's time for a break. And remember, always be committing!",
        },
        {
          id: 9,
          name: "Redux",
          image: redux,
          desc: "They call me the state manager. With Redux by my side, I ensure my apps' states are more organized than a librarian with OCD.",
        },
        {
          id: 10,
          name: "MySQL",
          image: mysql,
          desc: "Whenever data gets rowdy, I use MySQL to keep things structured. Tables turn, queries fly, but with MySQL, my data's never shy. Remember, when it comes to databases, I've always got the right joins and relations! 😉",
        },
        {
            id: 10,
            name: "Python",
            image: py,
            desc: "Afraid of Snakes in Real life???  Still loves python.....😉",
          },
      ];
      const     handleclick=(index,description,naming)=>{
        setSelected(index);
        setDescc(description);
        setName(naming);
      }
  return (
    <div id='expertise'>
    <Link spy={true} smooth={true} offset={-50} duration={500} to="work">
        <img id="arrowexpertise" src={arrow} />
      </Link>
        <div id='headexpertise'>
        <p style={{fontWeight:100}} id='helo'>Explore My</p>
        <p id='name'>Expertise</p>
        </div>
        <section id='skillbox'>
            {
                arr.map((images)=> (
                    <div id='imag'>
                    <img id='tick' src={tick} />
                    <img src={images.image} key={images.id} onClick={()=>handleclick(images.id, images.desc, images.name)} id='icons' />
                    </div>
                    
                ))
            }
        </section>
        <div id="info">
        <h2 id="skillname">{name}</h2>
        <div id="description">{descc}</div>
      </div>
    
    </div>
  )
}

export default Expertise