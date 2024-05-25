import React from "react";
import "../styling/Achievements.css";
import group from "../styling/images/group.jpeg";
import ninja from "../styling/images/codingninja.png";
import { Tilt } from "react-tilt";
import { ssrImportKey } from "vite/runtime";
function Achievements() {
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
    <div id="achievements">
      <div id="headachivements">
        <p style={{ fontWeight: 100 }} id="helo">
          Let's Together Review My{" "}
        </p>
        <p id="name"> Achievements</p>
      </div>
      <section id="mainachievement">
        <div id="imageachive">
          <Tilt options={defaultOptions} id="achive">
            <img id="imagee" src={group} />
          </Tilt>
          <Tilt options={defaultOptions} id="achive">
            <img id="imagee" src={ninja} />
          </Tilt>
        </div>
        <div id="descachieve">
            <div id="samebox">Succesfully secured Rank 5 among 300+ teams at Innocodethon
              Hackathon organised at ITS engineering college (May,2024)</div>
            <div id="samebox">Solved 150+ coding problems on online platforms !!</div>
        </div>
      </section>
    </div>
  );
}

export default Achievements;
