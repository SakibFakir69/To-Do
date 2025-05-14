import React, { ChangeEvent, useEffect, useState } from "react";

function TaskBoard() {

  // usestate manage state in react 
  // most used hook in functional components

  const [ Tasks , setTasks ] = useState<string[]>([]

  );
  const [task, settask ] = useState<string>('');

  // useeffect work when something change in dom then useefefct work
  // useeffect have a depdenices
  // if depdencish change usefect run 


  useEffect(()=>{

    const storedTask = localStorage.getItem("task");

    if(storedTask){
      const dataTask:Array<string> = JSON.parse(storedTask);
      // convert objection 
      // but inset to array
      setTasks(dataTask);
    }


    return ()=> console.log("closed")


  },[task])
  // if task hit useeffect work


  



  






  

  interface TODO {
    Task: string;
    TaskCount: number;
    isCompleted: boolean;
    process: "Todo" | "Process" | "Done";
  }

  
  // create onSubmit button

  const addTask= (event:React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>

   )=>{

    event.preventDefault();
    if(task.trim()==="") return;

    const updateTask = [...Tasks,task];
    // array inset to localstroage
    // use stringfy

    localStorage.setItem('task',JSON.stringify(updateTask));
   
    settask(" ");
    console.log(task);


   

    
  }


 


  return <div>


    <section>
    {/* groupe of content */}

      <h1 className="text-center text-5xl font-semibold">Easy Task</h1>
    </section>


    <section>

      <div className="border p-2 ">
        <input

      

        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> settask(e.target.value)}
        
        type="text" placeholder="Enter your task" className="px-10 border py-2.5" />

        <button onClick={addTask} className="px-10 py-2.5  bg-green-500 text-xl cursor-pointer">Add</button>

      </div>
      {/* div is division is block element  */}
      {/* section is grouping content */}
      {/* use state mange state in funtional comp */}
      <div className="border h-56">

        <h2>To-Do</h2>

        {
          Tasks.map((item,key)=>(
            <div key={key}>
              <p>{item}</p>

            </div>
          ))
        }
      </div>
      

    </section>

  
  
  
  </div>;
}

export default TaskBoard;
