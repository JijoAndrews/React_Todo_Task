import React from 'react'



let inputname="";
let inputdiscript="";


function Titlecomponent({checkeditstate,testhandleinput})
{
    const checkbtnstate=(checkeditstate)=>{
        
        let state='';
        let btnclassname="";

        if(checkeditstate==="edit")
        {
            inputdiscript=document.getElementById('defaultid').value;
            inputname=document.getElementById('defaultname').value;
            state="Update";
            btnclassname="btn btn-primary"
        }else
        {
            state="Add Todo";
            inputname="";
            inputdiscript="";
            btnclassname="btn-forselect btn btn-success"

        }

       return( <button className={btnclassname} onClick={()=>testhandleinput(inputname,inputdiscript)}>{state}</button> )   

    }
   
    return (
    <div key={"tc"} className="titleclass">

          <input type='text' className='inputclass' placeholder='Todo Name' id='defaultname' onChange={(e)=>{inputname=e.target.value}}></input>
          <input type='text'  className='inputclass' placeholder='Todo Discription' id='defaultid' onChange={(e)=>{inputdiscript=e.target.value}}></input>
          {checkbtnstate(checkeditstate)}
      </div>
  )
}

export default Titlecomponent