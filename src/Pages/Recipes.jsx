import React, { useContext, useEffect, useState } from 'react'
import fetchHook from '../customHooks/fecthHook'
import { GeneralContext } from '../context/GeneralContext'
import CategoryComp from '../Components/CategoryComp'

function Recipes() {
  const apiKeyRecipe=import.meta.env.VITE_KEY_RECIPE
  const apiIdFRecipe=import.meta.env.VITE_ID_RECIPE
  // const [getFromEdamam,data,loading,error]=fetchHook()

  return (
    <div>
        <CategoryComp category={"recipe"}  apiKey={apiKeyRecipe} apiId={apiIdFRecipe} />
    </div>
  )
}

export default Recipes