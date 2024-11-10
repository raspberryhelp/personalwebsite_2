import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import neuv from "./assets/neuv.png";
import About from "./About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <div class="bg-custom-blue h-screen">
    <div className="container text-center mx-auto text-stone-100 p-10">
        If you're seeing this it means my app worked :) A test to see if it works even though it's already deployed
      </div>
      <br />
      <About/>
    </div>
     
     
    </>
  );
}

export default App;
