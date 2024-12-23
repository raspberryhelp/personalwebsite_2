import React from 'react'
import neuv from "./assets/neuv.png";



function About() {

  const greetings = [
    "Hello there visitor! I've see you've come a long way. Here, have some tea, there's a lot to talk about...♫",
    "Oh welcome! I just finished cleaning the kitchen, but you can have a seat right there!", 
    "Was beginning to think that you got lost, but it seems you've found the way anyway. Welcome, and please make yourself at home!",
    "Thank you for visiting my website, feel free to look around!"
  ];
  
  const randomgreet = greetings[Math.floor(Math.random() * greetings.length)];
  return (
    <div className = "container mx-auto bg-stone-700 rounded-lg flex p-5 w-1/2">
        <img class ="float-left mx-auto object-cover max-h-40 rounded-lg px-10" src={neuv}/>
        <div className="text-zinc-200">{randomgreet} </div>
        
    </div>
  )
}

export default About

