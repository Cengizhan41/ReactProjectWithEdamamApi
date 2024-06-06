import React, { useContext, useEffect, useState } from 'react'
import fetchHook from '../customHooks/fecthHook'
import { GeneralContext } from '../context/GeneralContext'
import CategoryComp from '../Components/CategoryComp'

function Food() {
    const apiKeyFDB=import.meta.env.VITE_KEY_FOOD_DB
    const apiIdFDB=import.meta.env.VITE_ID_FOOD_DB
    const [getFromEdamam,data,loading,error]=fetchHook()

    
      
  return (
    <div>
        <CategoryComp category={"food"}  apiKey={apiKeyFDB} apiId={apiIdFDB} />
    </div>
  )
}

export default Food