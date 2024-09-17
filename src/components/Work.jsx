import React from 'react'
import '../styling/Work.css'
import bot from '../styling/images/cheatchat.png'
import vajra from "../styling/images/vajra.png";
import weather from "../styling/images/weather.png";
import cc from '../styling/images/BCC.png'
import portf from '../styling/images/myport.png'

const Work = () => {
  return (
    <div id='work'>

<div id='headwork'>
        <p style={{fontWeight:100}} id='helo'>Browse My Recent</p>
        <p id='name'> Projects</p>
        </div>
        <div id='p1'>
            <img src={bot} />
            <div id='infobox'><p>Cheat-Chat is AI chatbot, The application features user authentication via email and password, utilizing JSON Web Tokens (JWT) and cookies for secure session management. Additionally, the chatbot stores user conversations for up to 7 days  This project showcases a seamless blend of AI-powered conversation capabilities, robust security measures, and efficient data storage.</p>
            <a id='c' style={{color:"orange"}} href="https://github.com/ketansharma22/Cheat-Chat" >Wanna C ?</a>
            </div>
        </div>
        <div id='p2'>
            <div id='infobox'><p>Vajra predicts wheather the person will have a heart attack few minutes before it happens by measuring their BPM,SpO2,body temperature in real-time and warns them!!!</p>
            <a id='c' style={{color:"orange"}} href="https://tse2.mm.bing.net/th?id=OIP.t1c0oyXbZ_Zw6llqaTkddwHaDV&pid=Api&P=0&h=180" >Wanna C ?</a>
            </div>
            <img src={vajra} />
        </div>
        <div id='p3'>
            <img src={weather} />
            <div id='infobox'><p>Mausamii is a sleek and intuitive web application designed to provide users with real-time weather updates and forecasts</p>
            <a id='c' style={{color:"orange"}} href="https://mausamii.vercel.app/" >Wanna C ?</a>
            </div>
            
        </div>
        <div id='p4'>
            <img src={cc} />
            <div id='infobox'><p>CC is a Python application that activates the webcam to count bicep curl repetitions with the right hand. Using the cvzone and Mediapipe libraries, the program detects arm movements and provides real-time feedback on the number of completed curls.</p>
            <a id='c' style={{color:"orange"}} href="https://github.com/ketansharma22/Bicep_Curl_COunter?tab=readme-ov-filet" >Wanna C ?</a>
            </div>
            
        </div>
        <div id='p5' style={{width:"100%"}}>
            <img src={portf} />
            <div id='infobox'><p>Hey!!, This the current project which you're viewing!!</p>
            <a id='c' style={{color:"orange"}} href="https://myhome-ketansharma22s-projects.vercel.app/" >Wanna C ?</a>
            </div>
            
        </div>

    </div>
  )
}

export default Work