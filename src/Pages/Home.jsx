import React from 'react'
import { StyledHome } from './styled/StyledHome'
import HomeCalcComp from '../Components/HomeCalcComp'
StyledHome
function Home() {
  return (
    <StyledHome className="mx-auto col-xxl-8">
    <div className="row flex-lg-row-reverse align-items-center heroRow shadow rounded mb-2 mb-sm-5">
      <div className="col-lg-7 imgContainer p-0">
        <img src="/images/nutrition.jpg" className="d-block mx-lg-auto img-fluid rounded" alt="nutrition" loading="lazy"/>
      </div>
      <div className="col-lg-5 infos">
        <h1 className="display-5 fw-bold lh-1 mb-3">Everything related to nutrition</h1>
        <p className="lead">This site is a nutrition demo site. It is created using the  <strong>Edamam API</strong>.It is designed only as a demo for web development.</p>
      </div>
    </div>
      <HomeCalcComp/>
  </StyledHome>
  )
}

export default Home