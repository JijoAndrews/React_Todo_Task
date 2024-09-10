import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Todoheader'

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
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="titleclass">
      <h1>Todo Application</h1>
      <input type='text' placeholder='Todo Name'></input>
      <input type='text' placeholder='Todo Discription'></input>
      <button onClick={() => setCount((count) => count + 1)}>Enter</button>
      <p className='owntext'>count is {count}</p>
    </div>
  )
}

export default App
