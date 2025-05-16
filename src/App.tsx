import React, { useEffect, useMemo, useReducer, useState } from "react";
import TaskBoard from "./components/TaskBoard";

function App() {
  
  const [ active , setactive ] = useState<boolean>(!true);


  const btnTogle =()=>{
    
    setactive(true)
  }
  console.log(active);

  return (
    <div>

      <button onClick={btnTogle}>click me</button>
      





    </div>
  );
}

export default App;
