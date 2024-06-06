import React, { useContext, useEffect } from 'react'
import fetchHook from '../customHooks/fecthHook'
import { StyledWDYE } from '../Styled/StyledWDYEat'
import LoadinComp from './LoadinComp'
import { GeneralContext } from '../context/GeneralContext'
import { Link } from 'react-router-dom'
import WDYErrorComp from './WDYEErrorComp'

function WDYEatResultComp({query}) {
    const recipeApiID=import.meta.env.VITE_ID_RECIPE
    const recipeApiKey=import.meta.env.VITE_KEY_RECIPE
    const [getFromEdamam,data,loading,error]=fetchHook()
    const {setControl1} = useContext(GeneralContext)
    
    useEffect(()=>{
        getFromEdamam(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${recipeApiID}&app_key=${recipeApiKey}`)
    },[])

    const filtered = {};

    data?.hits?.filter(item=>item?.recipe?.image).forEach(item=>{
      const image = item?.recipe?.image;
      if ( !filtered[image]) {
          filtered[image] = item;
      }})
  const filteredData=Object.values(filtered).length >= 6 ?  Object.values(filtered).slice(0,6 ) : Object.values(filtered);
//   console.log(filteredData)

  function tryAgain(e){
    e.preventDefault();
    setControl1(false)
  }
  return (
    <StyledWDYE className='row g-3 mx-auto mt-1'>
        {
        loading==true ?
        <LoadinComp/>
        :
        (
            error==true ||  filteredData?.length==0
            ?
            <WDYErrorComp/>
            :
            <>
            <h5 className='title'> You are viewing the results for the query <strong>{query}</strong>.If you couldn't find the result you were looking for, you can make a more specific search. <button onClick={tryAgain} className='btn mx-2 '>Click</button> to try again.</h5>
            { filteredData?.map((item,key)=>{
                return(
                <div className="col-sm-6" key={key}>
                <div className="card mb-3 shadow " >
            <div className="row g-0 ">
                <div className="col-lg-5">
                    <div className="img-wrap">
                <img src={item?.recipe?.image} className="img-fluid rounded-start" alt={item?.recipe?.label}/>
                </div>
                </div>
            <div className="col-lg-7">
                <div className="card-body">
                    <h5 className="card-title">{item?.recipe?.label.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}   </h5>
                    <div className="badges d-flex  flex-sm-row flex-column flex-wrap">
                    <small className='mb-1 badge text-bg-danger'>{ item?.recipe?.dishType?.[0].charAt(0).toUpperCase() + item?.recipe?.dishType?.[0].slice(1)}</small> 
                    <small className='ms-sm-1 mb-1 badge text-bg-danger'>{ item?.recipe?.dietLabels?.[0]}</small> 
                    <small className='ms-sm-1 mb-1 badge text-bg-danger'> { item?.recipe?.mealType?.[0].split('/')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('/')}</small>
                    <small className='ms-sm-1 mb-1 badge text-bg-danger'>Weight : {Math.floor(item?.recipe?.totalWeight)} g</small>
                    <small className='ms-sm-1 mb-1 badge text-bg-danger'> {Math.floor(item?.recipe?.totalNutrients?.ENERC_KCAL?.quantity) } Kcal</small>
                    </div>
                    <Link to={`/details/recipe/${item?.recipe?.label}`} className='btn moreDetails'>More Details</Link>
                </div>
               
            </div>
            </div>
                </div>
                </div>
                )
            })}
            </>
        )
       
        }
        
 
    </StyledWDYE>
  )
}

export default WDYEatResultComp