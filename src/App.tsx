import React, { useReducer } from "react";
import TaskBoard from "./components/TaskBoard";

function App() {
  // usestate hook isa a react functona; component hook
  /// manage state in compnents

  type Action =
    | { type: "increment" }
    | { type: "decriment" }
    | { type: "hidden" };
  type State = {count:number} | {hidden:boolean};


  const reducr = (state: State, action: Action):State => {
    switch (action.type) {

      case "increment":
        return { ...state, count: state.count + 1 };

      case "decriment":
        return { ...state, count: state - 1 };

      case "hidden":
        return { ...state, hidden: state.hidden };
      default:
        return state;
    }

  };

  const [state, dispatch] = useReducer(
    () => reducr,

    {
      count: 0,
      hidden: false,
    }
  );

  return <div>
    {state.count}


  </div>;
}

export default App;
