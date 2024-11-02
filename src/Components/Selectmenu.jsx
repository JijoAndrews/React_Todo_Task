import React from 'react'
import "../App.css"

function Selectmenu({checkstateevent}) {

let getval=document.getElementById("status-select")===null?false:true
let selectval=getval==true?document.getElementById("status-select").value:"";
let bgcolor=selectval==="c"?"green":"red";

const styledata=
  {
    backgroundColor:bgcolor,
    display:"flex"
  }

  return (
    
    <div className='lableandselect'>
    {/* <label htmlFor="status-select"> <h5 className='titletext'>Status Filter:</h5></label> */}
    <h5 className='titletext'>Status Filter:</h5>
    <select name="titledd" id="status-select" style={styledata}
      onChange={(e)=>{{checkstateevent(e.target.value)}}}>
      <option value="all">All</option>
      <option value="c">Completed</option>
      <option value="uc">Uncompleted</option>

    </select>

    </div>)
}

export default Selectmenu
