import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Todoheader'
import Cardbody from './Components/Cardbody'

function Bsicapp()
{
  const [count, setCount] = useState(0)

  return (
    <div className='col-lg-4'>
      <div className='col-sm-12'>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>   
    </div>
   
  )
}
 
// let cardlist=[];

function createacard(data,inputdata)
{
  console.log("updated data:",data);  
  console.log("input data:",inputdata);
  return <Cardbody key={data.id} hsd={handlestatus}/>
}

function testcompt(odata,checkmark,currentdata)
{
  console.log("testingggg--",odata)
  const handlestatus=(curid,curstatus)=>{odata[curid].status=curstatus,console.log("data updated:",curid,curstatus,odata)}
  let cardlist=[];
  if(checkmark==='all'|| checkmark==='none')
    {
      cardlist= odata.map((todo)=>todo)
    }else
    {
      cardlist=odata.filter((todo,index)=>todo.status==checkmark)
    }
  
  currentdata=cardlist.map((tododata,index)=>
  (<Cardbody 
  key={index} 
  dataid={tododata.id} 
  dataname={tododata.name}
  datadriscp={tododata.discript} 
  status={tododata.status} 
  hsd={handlestatus}/>))

  return(
  <>
    {/*{console.log("odata before rendering--",checkmark,odata,cardlist)}*/}
    <div key={"cc"} className="cardclass"> 
    {/* {cardlist.map((tododata,index)=>(<Cardbody key={index} dataid={tododata.id} dataname={tododata.name} datadriscp={tododata.discript} hsd={handlestatus}/>))} */}
    {console.log("odata after rendering--",checkmark,cardlist,currentdata)}
    {/* {cardlist} */}
    {currentdata}
    </div>
  </>
  )
}


//const handlestatus=(curid,curstatus)=>{setodata(odata=>odata[curid].status=curstatus)}
//const handlestatus=(curid,curstatus)=>{console.log("data return:",curid,curstatus)}

const Tododata=[[{}],0];
let datacount=0;
let filtermark="none";

function App() {

  const [odata,setodata] =useState([]);
  const [checkstate,setcheckstate]=useState();
  const [currentlist,setlist]=useState([]);
  const handlestatus=(curid,curstatus)=>{odata[curid].status=curstatus}

  useEffect(()=>{
    console.log("rerender:",odata);
  },[odata])

  let inputname="";
  let inputdiscript="";


  const handlebothinput=(namedata,disdata)=>
  {   
    if(namedata && disdata)
      {
        const Tododata1={};
        Tododata1.id=datacount;
        Tododata1.name=namedata;
        Tododata1.discript=disdata;
        Tododata1.status="none";
    
        console.log("current input:",Tododata1,odata);
        setodata(odata=>[...odata,Tododata1]);
        datacount=datacount+1;  

        document.getElementById('defaultname').value='';
        document.getElementById('defaultid').value='';
        
      }else
      {
        alert("dont leve empty inputs");
      }
      
    };

  // const handlefiltersystem=(odata,checkmark,currentdata)=>{
  //   console.log("testingggg--",odata)
  //   const handlestatus=(curid,curstatus)=>{odata[curid].status=curstatus,console.log("data updated:",curid,curstatus,odata)}
  //   const cardlist=odata.filter((todo,index)=>todo.status==checkmark)
  //   currentdata=cardlist.map((tododata,index)=>(<Cardbody key={index} dataid={tododata.id} dataname={tododata.name} datadriscp={tododata.discript} hsd={handlestatus}/>))
  // }

  const handlefiltersystem=(checktag)=>{
    console.log("testingggg--",checktag,odata)
    const handlestatus=(curid,curstatus)=>{odata[curid].status=curstatus,console.log("data updated:",curid,curstatus,odata)}
    const cardlist=odata.filter((todo)=>todo.status==filtermark)
    setlist(currentlist=>cardlist.map((tododata,index)=>(<Cardbody key={index} dataid={tododata.id} dataname={tododata.name} datadriscp={tododata.discript} hsd={handlestatus}/>)))
  }


  return (
    <>
      <h1>Todo Application</h1>
      <div key={"tc"} className="titleclass">
     
        <input type='text' placeholder='Todo Name' id='defaultname' onChange={(e)=>{inputname=e.target.value}}></input>
        <input type='text' placeholder='Todo Discription' id='defaultid' onChange={(e)=>{inputdiscript=e.target.value}}></input>
        <button onClick={() =>handlebothinput(inputname,inputdiscript)}>Add Todo test</button>
        <label htmlFor="status-select">status:</label>


        <select name="pets" id="status-select"
         onChange={(e)=>{ {console.log(odata,e.target.value),
         filtermark=e.target.value,setcheckstate(e.target.value),
         testcompt(odata,filtermark,currentlist)}}}>

          <option value="none">--Select--</option>
            <option value="all">All</option>
            <option value="c">Completed</option>
            <option value="uc">Uncompleted</option>
        </select>

        <div key={"cc"} className="cardclass"> 
        </div>
      </div>


      {testcompt(odata,filtermark,currentlist)}
    </>
   
  )
}

export default App
