import React, {
  Children,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import ShowData from "./shared/ShowData";

function App() {
  const [counter, setcounter] = useState<number>(0);

  // reference 

 

  const [value, dispatch] = useMemo(
    function () {
      setcounter(counter + 1);
    },
    [counter]
  );

  const btnClick = useCallback(() => {
    setcounter(counter + 1);
  }, [counter]);

   useEffect(() => {
    // update value if render
    setcounter(counter + 1);
  }, [btnClick]);


  // callback use for function re creation 
  // use memeo for memorize 



  return (
    <div>
      <p>Count: {counter} </p>
      <button onClick={btnClick}>Update</button>

      {/* components */}

      <ShowData clickme={btnClick} />
    </div>
  );
}

export default App;
