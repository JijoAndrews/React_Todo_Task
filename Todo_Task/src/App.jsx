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
 
const cardlist=[];

function createacard(data,inputdata)
{
  console.log("updated data:",data);  
  console.log("input data:",inputdata);
//  cardlist.push(<Cardbody key={data.id}  id={data.id} name={data.name} dis={data.discript}/>);

  return <Cardbody key={data.id}  id={data.id} name={data.name} dis={data.discript}/>
  //return cardlist;
}


function testcompt(){
  console.log("testingggg")
  return(
  <>
    <h2>Todo Application dawwwwwwwwwwwwwww</h2>
  </>
  )
}

const Tododata=[[{}],0];

let datacount=0;

function App() {

  const [count, setCount] = useState(0)

  const data={id:"noid",name:"john doe",discript:"well this is intial discription",totalcount:0}
  const [inputdata,setdata]= useState(data);
  const [odata,setodata] =useState([{}]);

  useEffect(()=>{
    console.log("rerender:",odata);
  },[odata])

  // const handlenamechange=(e)=>{  console.log("Name:",e.target.id,e.target.value) ; setdata(data.name=e.target.value)}
  // const handledischange=(e)=>{  console.log("Discription:",e.target.id,e.target.value) ; setdata(data.name=e.target.value)}

  let inputname="";
  let inputdiscript="";
  const handlebothinput=(namedata,disdata)=>{   
    if(namedata && disdata)
      {
        const Tododata1={};
        Tododata1.id=datacount;
        Tododata1.name=namedata;
        Tododata1.discript=disdata;
    
        console.log("current input:",Tododata1,odata);
        setodata(odata=>[...odata,Tododata1]);
        datacount=datacount+1;  
      }else
      {
        alert("dont leve empty inputs");
      }
    };
  return (

    <>
      <h1>Todo Application</h1>
      <div key={"tc"} className="titleclass">
     
        <input type='text' placeholder='Todo Name' id='defaultname' onChange={(e)=>{inputname=e.target.value}}></input>
        <input type='text' placeholder='Todo Discription' id='defaultid' onChange={(e)=>inputdiscript=e.target.value}></input>
        <button onClick={() =>handlebothinput(inputname,inputdiscript)}>Add Todo test</button>
      </div>
    </>
   
  )
}

export default App
