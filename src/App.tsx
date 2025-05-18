import React, { Children, createContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import ShowData from "./shared/ShowData";

interface myProviervalue{
  count:number,
}

export const myProvider = createContext< myProviervalue | null >(null);

function App() {

  const [ count , setcount ] = useState<number>(1045);

  useEffect(()=>{

  },[])
  // empty dencies
  //react.fc<{number:number}} | null>

  



  return (
    <div>
     

      <myProvider.Provider value={{count}}>
         <ShowData data={10} count={10}/>
      </myProvider.Provider>



      





    </div>
  );
}

export default App;
