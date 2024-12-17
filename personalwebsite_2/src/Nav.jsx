import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav class="bg-stone-500 rounded-t-lg p-3 m-7">
        <ul>
          <ul className="flex justify-center gap-4">
            <li>▼△▼△▼△▼△▼</li>
          <Link to ="/about" className = "font-medium text-stone-800 hover:text-stone-50">
        About
        </Link>
        <li>▼△▼△▼△▼△▼</li>
          </ul>
        
        </ul>
      
      </nav>
    </>
  );
}

export default Nav;
