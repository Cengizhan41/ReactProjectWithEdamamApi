import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchHook from '../customHooks/fecthHook';
import FoodDetailComp from '../Components/FoodDetailComp';
import RecipeDetailComp from '../Components/RecipeDetailComp';
import LoadinComp from '../Components/LoadinComp';
import ErrorComp from '../Components/ErrorComp';

function DetailsPage() {
    const [getFromEdamam,data,loading,error]=fetchHook()
    const {category,name}=useParams();
    const apiId = category == "food" ? import.meta.env.VITE_ID_FOOD_DB : import.meta.env.VITE_ID_RECIPE
    const apiKey = category == "food" ? import.meta.env.VITE_KEY_FOOD_DB : import.meta.env.VITE_KEY_RECIPE
   
    useEffect(()=>{
        const endpoint=category === "recipe" ? 
        `https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=${apiId}&app_key=${apiKey}` :
        `https://api.edamam.com/api/food-database/v2/parser?app_id=${apiId}&app_key=${apiKey}&ingr=${name}&nutrition-type=cooking`;
        getFromEdamam(endpoint);
    },[category,name])

    const willPrintData=category == "food" ? data?.hints?.find(item => item?.food?.label == name) : data?.hits?.find(item => item?.recipe?.label == name)

    // console.log(willPrintData)
  
  return (
          loading==true ?
          <LoadinComp/>
          :
          (
              error==true
              ?
              <ErrorComp/>
              :
             ( category =="food" ?
              <FoodDetailComp  data={willPrintData}/>
              :
              <RecipeDetailComp data={willPrintData} />)
            
          )      
    
  )
}

export default DetailsPage