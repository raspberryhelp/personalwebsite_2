import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav class="bg-stone-500 rounded-t-lg px-10 py-4 m-7 max-w-4xl mx-auto">
        <ul>
          <ul className="flex justify-center gap-20 text-stone-50/[.6] hover:text-stone-50 ">
            <li>▼△▼△▼△▼△▼</li>
          <Link to ="/about" className = "font-medium text-stone-800 hover:text-stone-50 hover:scale-110 transition-transform ">
        About
        </Link>
        <Link to ="/projects" className = "font-medium text-stone-800 hover:text-stone-50 hover:scale-110 transition-transform">
        Projects
        </Link>
        <Link to ="/Tools" className = "font-medium text-stone-800 hover:text-stone-50 hover:scale-110 transition-transform">
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
