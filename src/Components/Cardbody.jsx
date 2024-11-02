import React from 'react'
import '../App.css'


const Cardbody = ({dataid,dataname,datadriscp,status,hsd,btnevnt,delevnt}) => 
  {
    let bgcolor=status==='c'?"green":"red";

    const styledata=
      {
        backgroundColor:bgcolor,
        display:"flex"
      }
    
    return (
      <>
        <div key={dataid} className='col-md-4'>
          
              <div className="card">

                  <div className='card-body'>
                    
                    <div className='card-text'>
                    Task: {dataname}
                    </div>

                    <div className='card-text'>
                    Discription: {datadriscp}
                    </div>

                    <div className='card-text'>
                      <label htmlFor={`card-select-${dataid}`}>status:</label>
                      <select  name="carddd" id= {`card-select-${dataid}`} onChange={(e)=>{hsd(dataid,e.target.value)}}  defaultValue={status}  style={styledata}>     
                      <option  value="uc">Uncompleted</option>
                      <option  value="c">Completed</option>
                      </select>
                    </div>

                    <div className='card-end'>
                      <button className='btn-forselect btn btn-success' onClick={(e) =>{btnevnt(dataid)}}>
                        Edit
                      </button>

                      <button className='btn-forselect btn btn-danger' onClick={(e) =>{delevnt(dataid)}}>
                        Delete
                      </button>
                    </div>

                  </div>

              </div>
        </div>
      </>
    )
  }
export default Cardbody