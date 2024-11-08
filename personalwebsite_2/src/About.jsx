import React from 'react'
import neuv from "./assets/neuv.png";

function About() {
  return (
    <div className = "container mx-auto bg-stone-700 rounded-lg flex p-5 w-1/2">
        <img class ="float-left mx-auto object-cover max-h-40 rounded-lg px-10" src={neuv}/>
        <div className="text-zinc-200">Hello! Welcome to my page! I make art sometimes but it's always sparse. Enjoy my portfolio!</div>
        
    </div>
  )
}

export default About


