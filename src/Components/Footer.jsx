import React from 'react'
import { StyledFooter } from '../Styled/StyledFooter'
import Brand from '/images/food-svgrepo.svg'
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <StyledFooter className="d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-center py-2 mt-sm-5 mt-2 border-top   mx-3">
    <div className=" d-flex align-items-center py-1 py-sm-0">
    <a className="brand d-flex align-items-center" href='/' > <img src={Brand} alt="brand" /> <span className='fs-5'> FoodDemo</span> </a>
    </div>
    <div className="text-center footerInfo">
    <span className="mb-3 mb-md-0 text-muted">© 2024 Company, Inc - This demo project has been created using the Edamam API.</span>
    </div>
    <ul className="nav  justify-content-end list-unstyled d-flex mb-0 mb-sm-1">
        <li className='list-group-item display-6'> <a href="https://github.com/Cengizhan41" target='blank'><FaGithub /></a> </li>
    </ul>
  </StyledFooter>
  )
}

export default Footer