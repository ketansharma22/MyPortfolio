import React from 'react'
import '../styling/Projects.css'
import vajra from "../styling/images/vajra.png";
import random from "../styling/images/randomgif.png";
import bubble from "../styling/images/bubble.png";
import weather from "../styling/images/weather.png";
import portf from '../styling/images/myport.png'
import pass from "../styling/images/pass.png";

function Projects() {

    const arr = [
        {
          id: 1,
          name: "Vajra",
          desc:"vajra predicts wheather the person will have a heart attack in few minutes by measuring their BPM,SpO2,body temperature and more!!!",
          image: vajra,
          link: "https://theuselessweb.com/",
          stack:"(ReactJS,Firebase,CSS,Python,FastAPI,ML)",
          github:"/",
        },
        {
          id: 2,
          name: "Mausamii",
          desc:"mausamii is a sleek and intuitive web application designed to provide users with real-time weather updates and forecasts",
          image: weather,
          link: "https://mausamii.vercel.app/",
          stack:"(HTML,CSS,Javascript)",
          github:"https://github.com/ketansharma22/mausamii",
        },
        {
          id: 3,
          name: "BubbleGame",
          desc:"A pure javascript based  bubble game focuses to improve your focus by playing it in your free time!!",
          image: bubble,
          link: "https://bubble-game-eight-pi.vercel.app/",
          stack:"(HTML,CSS,Javascript)",
          github:"https://github.com/ketansharma22/BubbleGame",
        },
        {
          id: 4,
          name: "Giffy",
          desc:"A simple react based web project which generates a random gif or any particular gif based on user's choice!!",
          image: random,
          link: "https://giffy-one.vercel.app/",
          stack:"(ReactJS,CSS)",
          github:"https://github.com/ketansharma22/Gif-Generator",
        },
        {
          id: 5,
          name: "PasswordGenerator",
          desc:"A very basic password generator react mini project to learn about some hooks like useState , useCallback , useEffect for beginners!!!",
          image: pass,
          link: "https://pass-puss.vercel.app/",
          stack:"(ReactJS,CSS)",
          github:"https://github.com/ketansharma22/PasswordGenerator",
        },
        {
          id: 6,
          name: "Portfolio",
          desc:"Made my own portfolio , on which you are exploring my project section rn",
          image: portf,
          link: "#",
          stack:"(ReactJS,Firebase,CSS)",
          github:"https://github.com/ketansharma22/Codsoft",
        },
      ];

  return (
    <div id='work'>
        <div id='headwork'>
        <p style={{fontWeight:100}} id='helo'>Browse My Recent</p>
        <p id='name'> Projects</p>
        </div>
        <section id='workmain'>
            {
                arr.map((images)=>(
                    <div id='card'>
                        <img id='cardimage' src={images.image} />
                        <h2 id='projectname'>{images.name}</h2>
                        <div id='anchor2'>
                            <a id="click"  href={images.link}>Live Demo</a>
                            <a id="click"  href={images.github}>GitHub</a>
                        </div>
                    </div>
                ))
            }
        </section>

    </div>
  )
}

export default Projects