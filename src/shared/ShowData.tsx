


import React, { FC } from 'react'

// react prevent re- render use react.memeo
// if passin props working re-render

interface User{

  clickme: ()=> void;


}
const  ShowData : React.FC<User> =React.memo(
  ({clickme})=> {


  console.log("Re render again , show data ")

  return (
    <div>ShowData

      <button onClick={clickme}>{'btnclick'}</button>



    </div>
  )
}

)

export default ShowData;