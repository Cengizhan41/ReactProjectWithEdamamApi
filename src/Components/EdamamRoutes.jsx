import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Food from '../Pages/Food'
import Recipes from '../Pages/Recipes'
import ErrorComp from './ErrorComp'
import DetailsPage from '../Pages/DetailsPage'


function EdamamRoutes() {

  return (
    <Routes>
    <Route path='/' element={ <Home/> }/>  
    <Route path='/food' element={  <Food/> }/>
    <Route path='/recipes' element={  <Recipes/> }/>
    <Route path='/details/:category/:name' element= { <DetailsPage/> } />
    <Route path='*' element={ <ErrorComp/> }/>
    </Routes>
  )
}

export default EdamamRoutes