import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import TaskBoard from "./components/TaskBoard";

function App() {

  // s -> one class one work

  const inputRef = useRef<HTMLHeadElement | HTMLBodyElement>(null);




  useEffect(()=>{
    console.log("render");

    if(inputRef.current)
    {
      inputRef.current.innerHTML='<h1>how are you</h1>'
      inputRef.current.blur();
      inputRef.current.style.background="red"
      inputRef.current.append("ok")
    
    }


  },[])

  

  

  
  
 
  

  return (
    <div>

      <h2 ref={inputRef}>Hello</h2>

      





    </div>
  );
}

export default App;
