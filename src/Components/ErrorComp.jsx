import React from 'react'
import { Link } from 'react-router-dom'

function ErrorComp() {
  return (
    <div className="col-sm-6 text-light my-5 py-1 px-2 mx-auto rounded text-center">
    <h3 className=''>We have nothing about this .</h3>
    <h4>To go to the Home Page <Link to={'/'} className='btn btn-danger fs-5 vertical-align-center' >Click</Link></h4>
    </div> 
  )
}

export default ErrorComp