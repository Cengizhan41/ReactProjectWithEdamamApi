import React, { useContext, useEffect, useState } from 'react'
import { GeneralContext } from '../context/GeneralContext';
import WDYEatResultComp from './WDYEatResultComp';

function HomeCalcComp() {

  const {control1,setControl1}=useContext(GeneralContext);
  // console.log(control1)

  useEffect(()=>{
    setControl1(false)
  },[])
  const [queryValue,setQueryValue]=useState(null)
    function formSubmit(e){
        e.preventDefault();
        // console.log(e.target.elements[0].value)   
        if(e.target.elements[0].value.length>3 && control1==false){
          setQueryValue(e.target.elements[0].value)
          setControl1(true)
         
        }

    }
  return (
    <div className="row homeFormContainer p-sm-4 p-2 rounded mb-sm-3 mb-1 shadow">
        <h3 className="homeFormTitle display-6 text-center border-bottom pb-sm-3 pb-1">What did you eat in last meal ? </h3>
        {
          control1 == false ?
          <>
          <div className="col-sm-6 mt-2">
          <form onSubmit={formSubmit}>
          <div className="mb-3">
              <label htmlFor="meal" className="form-label">Write down the meal that you have just eaten!</label>
              <input type="text" className="form-control" id="meal" name='mealInfo' placeholder='For example : Chicken salad'/>
          </div>
          <div className="btnContainer text-center">
          <button type="submit" className="btn">Submit</button>
          </div>
          </form>
          </div>
          <div className="col-sm-6 mt-2 d-flex  border-start ">
          <h3 className='my-auto'>Write the informations  and find out the result.</h3>    
          </div>
          </>
          :
          <WDYEatResultComp  query={queryValue}/>
        }
      
    </div>
  )
}

export default HomeCalcComp