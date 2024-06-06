import React from 'react'
import { StyledNavbar } from '../Styled/StyledNavbar'
import Brand from '/images/food-svgrepo.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <StyledNavbar className="navbar navbar-expand-lg mb-2 mb-md-3 mb-lg-5">
  <div className="container">
    <Link className="navbar-brand" to={'/'} > <img src={Brand} alt="brand" /> <span > FoodDemo</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to={'/recipes'}  activeclassname="active">Recipes</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to={'/food'}  activeclassname="active">Food</NavLink>
        </li>     
      </ul>  
    </div>
  </div>
</StyledNavbar>
  )
}

export default Navbar