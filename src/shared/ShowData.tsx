



import React, { useContext } from 'react'
import { myProvider } from '../App'

interface showDataProps{
  data:number,
  count:number,
}

const  ShowData:React.FC<showDataProps>=({})=> {

  const context = useContext(myProvider);



 
    
  return (
    <div>
      <h2>{context?.count}</h2>
      


    </div>
  )
}

export default ShowData