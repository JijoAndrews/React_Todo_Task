import React from 'react'
import { useState,useEffect} from 'react'
import App from '../App'


function createcard(id,name,discrip,setfn)
{
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

          <label htmlFor="card-select">status:</label>
          <select name="todos" id="card-select" onChange={(e)=>{e.target.value}}>
          {/* console.log(e.target.value) */}
            <option value="uc">Uncompleted</option>
            <option value="c">Completed</option>

          </select>

        </div>
        <button onClick={() =>{console.log("clicked")}}>
          Edit
        </button>

        <button onClick={() =>{console.log("clicked")}}>
          Delete
        </button>
      </div>   
    </div>
  )

}

// const Cardbody = ({dataid,dataname,datadriscp,hsd}) => 
//   {

   
//   return (
//    <>
//    {/* {createcard(dataid,dataname,datadriscp,hsd)} */}
//    <div key={dataid} className='col-lg-4'>
//       <div className='col-sm-12'>
//         <h1>Vite + React</h1>
//         <div className="card">

//         <button onClick={() =>{console.log("clicked")}}>
//             id is {dataid}
//             name is {dataname}
//             discrip is {datadriscp}
//         </button>

//           <label htmlFor="card-select">status:</label>
//           <select name="pets" id="card-select" onChange={(e)=>{console.log(dataid,e.target.value)}}>
//             <option value="uc">Uncompleted</option>
//             <option value="c">Completed</option>
//           </select>

//         </div>
//         <button onClick={(e) =>{console.log("clicked")}}>
//           Edit
//         </button>

//         <button onClick={(e) =>{console.log("clicked")}}>
//           Delete
//         </button>
//       </div>   
//     </div>
//    </>
//   )
// }





const Cardbody = ({dataid,dataname,datadriscp,status,hsd}) => 
  {
    console.log("card id;",dataid,status);

    const selectedvalue=(currenstatus)=>{
      if(currenstatus==="none")
        {
          (<label htmlFor={`card-select-${dataid}`}>status:</label>)
            (<select name="pets" id= {`card-select-${dataid}`} onChange={(e)=>{hsd(dataid,e.target.value)}}>  
            (<option value={hsd}>{hsd}</option>)    
            (<option value="uc">Uncompleted</option>)
            (<option value="c">Completed</option>)
           </select>)
        }else
        {
          (<label htmlFor={`card-select-${dataid}`}>status:</label>)
          (<select name="pets" id= {`card-select-${dataid}`} onChange={(e)=>{hsd(dataid,e.target.value)}}>  
          (<option value="none">select</option>)    
          (<option value="uc">Uncompleted</option>)
          (<option value="c">Completed</option>)
         </select>)
        }
    }

    return (
      <>
        <div key={dataid} className='col-lg-4'>
        <div className='col-sm-12'>
        <h1>Vite + React</h1>
        <div className="card">

          <button onClick={() =>{console.log("clicked")}}>
                id is {dataid}
                name is {dataname}
                discrip is {datadriscp}
          </button>

            <label htmlFor={`card-select-${dataid}`}>status:</label>
            <select name="pets" id= {`card-select-${dataid}`}  defaultValue={status} onChange={(e)=>{hsd(dataid,e.target.value)}}>     
            <option value="none">select status</option>
            <option value="uc">Uncompleted</option>
            <option value="c">Completed</option>

            </select>

        </div>
         <button onClick={(e) =>{console.log("clicked")}}>
          Edit
        </button>

        <button onClick={(e) =>{console.log("clicked")}}>
          Delete
         </button>
      </div>   
    </div>
      </>
    )
  }
export default Cardbody