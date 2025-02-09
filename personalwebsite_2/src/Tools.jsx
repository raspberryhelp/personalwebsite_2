import React from 'react'


const toolset = [{pname:"Languages", info:"Python, PHP, C, C++, Java, SQL (MySQL and SQLAlchemy), JavaScript"},
  {pname:"Developer Tools", info:"Visual Studio Code, CLion, IntelliJ, PyCharm"}, 
  {pname:"Operating Systems", info:"Windows 11, Ubuntu"},
  {pname:"Libraries", info:"Flask, Librosa, NumPy, React, Tensorflow"},
]
const Card = ({ card, index }) => (
  <div className="bg-stone-700 rounded-lg shadow-inner shadow-stone-500 p-5 mb-4 hover:scale-110 transition-transform hover:ring-1 text-zinc-200 ring-offset-2 " key = {index}>
    <div className="text-zinc-200 text-left">
      <div className="bg-custom-blue p-2 rounded">{card.pname}</div>
      <p className='p-2'>{card.info}</p>
    </div>
  </div>
);
function Tools() {
  return (
    <div className="container max-w-4xl mx-auto">
    {toolset.map((card, index) => (
        <Card card={card} key={index} />
      ))}
  </div>
  )
}

export default Tools