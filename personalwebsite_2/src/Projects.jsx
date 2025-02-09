import React from 'react'

const projectsset = [{pname:"Walnut Counter", info:"This very website"},
  {pname:"UTD Club Management System", info:"Project in CS 4347. Club management based system that allows users to browse, create and manage clubs."},
  {pname:"CraftingConecxions", info:"Project made in WeHACK"},  {pname:"Classif.ai", info:"Made alongside AIS as part of AIM. Classifies genre based on user input using a CNN network that utilizes transfer learning during training."}]
  
  const Card = ({ card, index }) => (
    <div className="bg-stone-700 rounded-lg shadow-inner shadow-stone-500 p-5 mb-4 hover:scale-110 transition-transform hover:ring-1 text-zinc-200 ring-offset-2 " key = {index}>
      <div className="text-zinc-200 text-left">
        <div className="bg-custom-blue p-2 rounded">{card.pname}</div>
        <p className='p-2'>{card.info}</p>
      </div>
    </div>
  );
function Projects() {
  return (
    <div className="container max-w-4xl mx-auto">
    {projectsset.map((card, index) => (
        <Card card={card} key={index} />
      ))}
  </div>
  )
}

export default Projects
