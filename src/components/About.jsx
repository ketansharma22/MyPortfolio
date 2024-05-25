import React from 'react'
import '../styling/About.css'
import me2 from '../styling/images/me2.jpeg'
import exp from '../styling/images/experience.png'
import educ from '../styling/images/education.png'
function About() {
  return (
    <div id='about'>
      <div id='upperabout'>
        <p style={{fontWeight:100}} id='helo'>Get to know More </p>
        <p id='name'>About Me</p>
      </div>
      <section id='aboutme'>
        <img id='aboutimage' src={me2} />
        <div id='textboxabout'>
          <section id='up'>
          <div id='same2' >
            <img id='imagesame' src={exp} />
            <p id='second'>Experience</p>
            <p id='third'>Web-Dev Intern @CodSoft </p>
            <p  id='fourth'>Ex-Campus Ambasador @Acmegrade</p>

          </div>
          <div id='same2' >
            <img id='imagesame' src={educ} />
            <p id='second'>Education</p>
            <p id='third'>BTech CSE</p>
            <p id='fourth'>MMDU Ambala</p>

          </div>
          </section>
          <section id='down'>
            <p id='third'>I am Ketan Sharma, a seasoned software engineer with a robust foundation in computer science and proficiency in Programming and Developing Frontend web applications. I excel in crafting collaborating on diverse projects, and bringing an innovative approach to software development. </p>
          </section>
        </div>
      </section>
    </div>
  )
}

export default About