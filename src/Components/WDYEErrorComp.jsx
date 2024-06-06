import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext'

function WDYErrorComp() {

  const{setControl1}=useContext(GeneralContext)

  function searchAgain(e){
    e.preventDefault();
    setControl1(false)
  }
  return (
    <div className="col-sm-6 text-light my-2 py-1 px-2 mx-auto rounded text-center">
    <h3 className=''>We have nothing about this .</h3>
    <h4>To try again <button className='btn btn-danger fs-5 vertical-align-center' onClick={searchAgain}>Click</button></h4>
    </div> 
  )
}

export default WDYErrorComp