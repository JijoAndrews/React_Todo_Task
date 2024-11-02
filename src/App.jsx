import { useEffect, useState } from 'react'
import './App.css'
import Cardbody from './Components/Cardbody'
import Titlecomponent from './Components/Titlecomponent'
import Selectmenu from './Components/Selectmenu'


let curnteditid=0;
let inputname="";
let inputdiscript="";
let datacount=0;



function editdatasec(curid,odata,seteditstate)
{
  seteditstate("edit");
  document.getElementById('defaultname').value=odata[curid].name
  document.getElementById('defaultid').value=odata[curid].discript
  inputname=odata[curid].name
  inputdiscript=odata[curid].discript
  curnteditid=curid;
}


function App() {
  
  const [odata,setodata] =useState([]);
  const [checkstate,setcheckstate]=useState("none");
  const [editstate,seteditstate]=useState("noediting");


  useEffect(()=>{
  },[odata])

 

  const handlebothinput=(namedata,disdata,datastatus)=>
  {   
    if(namedata && disdata && editstate==="noediting")
    {
     
      const Tododata1={};
      Tododata1.id=odata.length;
      Tododata1.name=namedata;
      Tododata1.discript=disdata;
      Tododata1.status="uc";
  
      const curdata=[...odata,Tododata1];
      setodata(curdata);
      

      datacount=odata.length;  
      document.getElementById('defaultname').value='';
      document.getElementById('defaultid').value='';

    }else if(namedata && disdata && editstate==="edit")
    {
      
      const datachange = odata.map((d, i) => {
        if (i===curnteditid) {
         d.id=curnteditid,
         d.name=namedata,
         d.discript=disdata
         return d;
        }else {
          return d;
        }
      });

      document.getElementById('defaultname').value=""
      document.getElementById('defaultid').value=""
      inputname="";
      inputdiscript="";
    
      seteditstate("noediting");
    }else
    {
      alert("dont leve empty inputs");
    }    
  }
  const handlebtnclick=(curid)=>{editdatasec(curid,odata,seteditstate)}

  const checkdelete=(curid)=>
    {
      if(editstate==="edit" && inputname===odata[curid].name && inputdiscript===odata[curid].discript )
      {
        inputname= inputname===odata[curid].name?"":inputname
        inputdiscript=inputdiscript===odata[curid].discript?"":inputdiscript
        document.getElementById('defaultname').value=inputname
        document.getElementById('defaultid').value=inputdiscript
        seteditstate("noediting");
      }

      let val=odata.filter((d=>d.id!==curid)).map((d, i) => {
        d.id=i;
        return d;
      })

     datacount=val.length;
      setodata(val);

 
  }

  const handlestatus=(curid,curstatus)=>
  { let statusset=[...odata];
  statusset[curid].status=curstatus;
  setodata(statusset);
  }
  
  const Createcardset=()=>
  {
    let cardlist=[];

    if(checkstate==='all' || checkstate==='none')
    {
      cardlist= odata.map((todo)=>todo)
    }else
    {
      cardlist=odata.filter((todo,index)=>todo.status==checkstate)
    }
    
    const renddata=cardlist.map((tododata,index)=>
      
      (<Cardbody 
      key={index} 
      dataid={tododata.id} 
      dataname={tododata.name}
      datadriscp={tododata.discript} 
      status={tododata.status} 
      hsd={handlestatus}
      btnevnt={handlebtnclick}
      delevnt={checkdelete}
      />)
    )

    return(
    <>      
      <div key={"cc"} className="container"> 
        <div className='row'>
        {renddata}
        </div> 
      </div>
    </>
    )
  }
  
  return (
    <>  
     <div className='todoclass'>
        
        <h1>Todo Application</h1>
        <Titlecomponent checkeditstate={editstate}  testhandleinput={handlebothinput}/>

        <div className='bodyclass'>
          <div className='labletext'>
            <h5 className='titletext'>My Todos:</h5> 
          </div>
          <Selectmenu  checkstateevent={setcheckstate}/>
        </div>

        <Createcardset/>
     </div>
    </>
   
  )
}

export default App
