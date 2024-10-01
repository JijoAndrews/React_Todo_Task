import React from 'react'
import { useState,useEffect} from 'react'
import App from '../App'


function createcard(id,name,discrip)
{
    // const [count, setCount] = useState(0)
    console.log("clicked-createcard func");
  return (
    <div key={id} className='col-lg-4'>
      <div className='col-sm-12'>
        <h1>Vite + React</h1>
        <div className="card">

        <button onClick={() =>{console.log("clicked")}}>
            id is {id}
            name is {name}
            discrip is {discrip}
        </button>

        {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button> */}
        
        </div>
      </div>   
    </div>
   
  )

}


const Cardbody = ({dataid,dataname,datadriscp}) => {
  console.log("clicked-entered card")
  return (
   <>
   {/* {createcard(dataid,dataname,datadriscp)} */}
   <div key={dataid}> {dataid} hello there buddy</div>
   </>
  )
}

export default Cardbody