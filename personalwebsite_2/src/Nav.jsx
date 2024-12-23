import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav class="bg-stone-500 rounded-t-lg p-3 m-7">
        <ul>
          <ul className="flex justify-center gap-20 text-stone-50/[.6] hover:text-stone-50 ">
            <li>▼△▼△▼△▼△▼</li>
          <Link to ="/about" className = "font-medium text-stone-800 hover:text-stone-50 ">
        About
        </Link>
        <Link to ="/projects" className = "font-medium text-stone-800 hover:text-stone-50">
        Projects
        </Link>
        <Link to ="/Tools" className = "font-medium text-stone-800 hover:text-stone-50">
        Tools I use
        </Link>
        <li>▼△▼△▼△▼△▼</li>
          </ul>
        
        </ul>
      
      </nav>
    </>
  );
}

export default Nav;
