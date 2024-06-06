import React, { useContext, useEffect, useRef, useState } from 'react'
import fetchHook from '../customHooks/fecthHook'
import LoadinComp from './LoadinComp'
import ErrorComp from './ErrorComp'
import { Link } from 'react-router-dom'
import { StyledCategoryComp } from '../Styled/StyledCategoryComp'
import { GeneralContext } from '../context/GeneralContext'

function CategoryComp({category,apiKey,apiId}) {
    const [getFromEdamam,data,loading,error]=fetchHook()

    const {categoryQueries} =useContext(GeneralContext)
    const[randomQuery,setRandomQuery]=useState(categoryQueries[Math.floor(Math.random() * categoryQueries.length)])
    // console.log(category,randomQuery,apiKey,apiId)
    useEffect(()=>{
        const endpoint=category === "recipe" ? 
        `https://api.edamam.com/api/recipes/v2?type=public&q=${randomQuery}&app_id=${apiId}&app_key=${apiKey}` :
        `https://api.edamam.com/api/food-database/v2/parser?app_id=${apiId}&app_key=${apiKey}&ingr=${randomQuery}&nutrition-type=cooking`;
        getFromEdamam(endpoint);
    },[randomQuery])

    const searchInputRef = useRef(null);

    function searchFunc(e){
        e.preventDefault();
        console.log()
        if(e.target.elements[0].value.length > 3){
         setRandomQuery(e.target.elements[0].value)
         searchInputRef.current.value=""
        }    
    }

    const filtered = {};
    const key = category === "recipe" ? "hits" : "hints";
    data?.[key]?.filter(item => item?.[category]?.image)?.forEach(item => {
        const image = item?.[category]?.image;
        if (!filtered[image]) {
            filtered[image] = item;
        }
    });
    const filteredData=Object.values(filtered);
    // console.log(filteredData)
  return (
    <StyledCategoryComp>
          {
        loading==true ?
        <LoadinComp/>
        :
        (
            error==true ||  filteredData?.length==0
            ?
            <ErrorComp/>
            :
            <div className="row">
            <h2 className="rowTitle display-5 text-center p-2 rounded mb-3"> {category.charAt(0).toUpperCase() + category.slice(1)} </h2>
            <div className="upFlex d-flex justify-content-between align-items-center mb-3 flex-md-row flex-column ">
            <h5 className='mb-0'>You are displaying the types of <strong>{category.charAt(0).toUpperCase() + category.slice(1)}</strong>  for the  <strong>'{randomQuery}'</strong>  query.</h5>
            <form onSubmit={searchFunc} className="d-flex" role="search">
            <input ref={searchInputRef} className="form-control me-2" type="search" placeholder={`Find a ${category.charAt(0).toUpperCase() + category.slice(1)}`} aria-label="Search" required/>
            <button className="btn" type="submit">Search</button> 
            </form>
            </div>    
          {filteredData.map((item, key) => {
            const recipe = item?.recipe;
            const food = item?.food;
            const weight = category === "recipe" && recipe ? Math.floor(recipe.totalWeight) : 100;
            const calories = category === "recipe" && recipe ? Math.floor(recipe.totalNutrients?.ENERC_KCAL?.quantity) : Math.floor(food?.nutrients?.ENERC_KCAL);

            return (
            <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4" key={key}>
                <div className="card mb-3 shadow categoryCard mx-auto">
                <div className="row g-0">
                    <div className="col-lg-5">
                        <div className="img-wrap">
                            <img src={category === "recipe" ? recipe?.image : food?.image} className="img-fluid" alt={category === "recipe" ? recipe?.label : food?.label} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="card-body">
                            <h5 className="card-title mb-3">
                                {(category === "recipe" ? recipe?.label : food?.label)?.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                            </h5>
                            <div className="badges d-flex flex-sm-row flex-column flex-wrap">
                                <small className='mb-1 badge text-bg-danger'>
                                    {category === "recipe" ? recipe?.dishType?.[0]?.charAt(0).toUpperCase() + recipe?.dishType?.[0]?.slice(1) : food?.category?.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                                </small>
                                {category === "recipe" && recipe && (
                                    <>
                                        <small className='ms-sm-1 mb-1 badge text-bg-danger'>{recipe?.dietLabels?.[0]}</small>
                                        <small className='ms-sm-1 mb-1 badge text-bg-danger'>{recipe?.mealType?.[0]?.split('/').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('/')}</small>
                                    </>
                                )}
                                <small className='ms-sm-1 mb-1 badge text-bg-danger'>
                                    {`Weight: ${isNaN(weight) ? 'N/A' : weight} g`}
                                </small>
                                <small className='ms-sm-1 mb-1 badge text-bg-danger'>
                                    {isNaN(calories) ? 'N/A Kcal' : `${calories} Kcal`}
                                </small>
                            </div>
                            <Link to={`/details/${category}/${category === "recipe" ? recipe?.label : food?.label}`} className='btn moreDetails'>More Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})}
           </div>
        )
       
        }
    </StyledCategoryComp>
  )
}

export default CategoryComp