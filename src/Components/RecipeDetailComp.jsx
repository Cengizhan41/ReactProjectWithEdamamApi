import React, { useRef, useState } from 'react'
import { StyledRecipeDetails } from '../Styled/StyledRecipeDetails';
import { Link } from 'react-router-dom';
import LoadinComp from './LoadinComp';
import 'chart.js/auto';
import { Bar, Pie } from 'react-chartjs-2';



function RecipeDetailComp({data}) {
    // console.log(data)


    const totalDaily = data?.recipe?.totalDaily;
    const totalDailyArray = totalDaily ? Object.entries(totalDaily) : [];
    // console.log(totalDailyArray)

    const totalNutrients=data?.recipe?.totalNutrients;
    const totalNutrientsArray = totalNutrients ? Object.entries(totalNutrients) : [];
    // console.log(totalNutrientsArray)

   
    const divisor =  data?.recipe?.totalWeight /  100
   

    // console.log(data?.recipe?.totalWeight,divisor)

    //scroll without scrollbar (heath labels)
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(null);
    const healthLabelsContainerRef = useRef(null);

    function handleMouseDown(e) {
      e.preventDefault();
      setIsDown(true);
      setStartX(e.pageX - healthLabelsContainerRef.current.offsetLeft);
      setScrollLeft(healthLabelsContainerRef.current.scrollLeft);
    }
    
    function handleMouseMove(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - healthLabelsContainerRef.current.offsetLeft;
      const walk = (x - startX) * 0.8; 
      healthLabelsContainerRef.current.scrollLeft = scrollLeft - walk;
    }

    //chartsjs
    const createPieData = (label, quantity) => {
      let backgroundColor = '';
      switch(label) {
        case 'Energy' :
          backgroundColor = '#ADD8E6'; 
          break;
        case 'Fat':
          backgroundColor = '#FFB6C1'; 
          break;
        case 'Carbs':
          backgroundColor = '#FFDAB9'; 
          break;
        case 'Protein':
          backgroundColor = '#90EE90'; 
          break;
        default:
          backgroundColor = '#f39c12'; 
      }
      return {
        labels: [label, 'Remaining Daily Need'],
        datasets: [{
          data: [quantity, `${100 - quantity}`],
          backgroundColor: [backgroundColor, '#b2b5bb'],
          hoverBackgroundColor: [backgroundColor, '#dcdde1'] // Changed from hoverBackgroundColor to backgroundColor
        }],

      };
    };

    const createBarData = (nutrients) => {
      const backgroundColors = nutrients.map(nutrient => {
        switch (nutrient.label) {
          case 'Fat':
            return '#FFB6C1'; 
          case 'Carbs':
            return '#FFDAB9'; 
          case 'Protein':
            return '#90EE90'; 
          default:
            return '#E0E0E0'; 
        }
      });
    
      return {
        labels: nutrients.map(nutrient => nutrient.label),
        datasets: [{
          label: `Total Nutrients (100g / ${energy?.quantity}${energy?.unit})`,
          data: nutrients.map(nutrient => nutrient.quantity),
          backgroundColor: backgroundColors,
          hoverBackgroundColor: '#b2b5bb' ,
          // backgroundColor: '#ecf0f1',
          borderColor: '#b2b5bb',
          borderWidth: 1,
        },
       
      ],
        
      };
    };
  
    const dailyNutrients = totalDailyArray
      ?.filter(item => ["ENERC_KCAL", "CHOCDF", "PROCNT", "FAT"].includes(item?.[0]))
      .map(item => ({
        label: item?.[1]?.label,
        quantity: ((item?.[1]?.quantity) / divisor).toFixed(2),
        unit: item?.[1]?.unit
      }));
  
      const totalNutrientsQuantity = totalNutrientsArray
      ?.filter(item => ["CHOCDF", "PROCNT", "FAT"].includes(item?.[0])) 
      .map(item => ({
        label: item?.[1]?.label,
        quantity: ((item?.[1]?.quantity) / divisor).toFixed(2),
        unit: item?.[1]?.unit
      }));

      const energy = totalNutrientsArray
      ?.filter(item => item[0] === "ENERC_KCAL")
      ?.map(item => ({
        label: item?.[1]?.label,
        quantity: ((item?.[1]?.quantity) / divisor).toFixed(2),
        unit: item?.[1]?.unit
      }))[0];

      const createBarOptions = (nutrients) => {
        return {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: '#f39c12', 
              },
            },
            tooltip: {
              // bodyColor: '#ecf0f1', 
              callbacks: {
                label: function (context) {
                  const nutrient = nutrients[context.dataIndex];
                  return `${nutrient.label}: ${nutrient.quantity} ${nutrient.unit}`;
                }
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#e67e22', 
              },
              grid: {
                color: '#e67e22',
              },
            },
            y: {
              ticks: {
                color: '#e67e22', 
              },
              grid: {
                color: '#e67e22', 
              },
            },
          },
        };
      };

      const createPieOptions = (nutrients) => {
        return {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return ` ${nutrients.unit}${context.formattedValue} `;
                }
              }
            }
          }
        };
      }
  return (

   
    data ?
    <StyledRecipeDetails>
    <div className="cardContainer rounded shadow">
    <div className="card mb-3">
<div className="row g-0">
  <div className="col-lg-4 my-auto text-center">
    <div className="img-wrap">
    <img src={data?.recipe?.image} className="img-fluid rounded shadow" alt={data?.recipe?.image}/>
    </div>
  </div>
  <div className="col-lg-8">
    <div className="card-body">
      <div className="d-flex align-items-center justify-content-between my-1 p-3 titles rounded flex-column flex-xl-row">
      <h4 className="card-title mb-0 ">{data?.recipe?.label.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}  </h4>
      <span className='badge text-bg-danger'> 100 g / {Math.round(data?.recipe?.calories / divisor) } kcal </span>
      <div className="badges">
      <span className='badge text-bg-success  me-1'>{data?.recipe?.dietLabels?.[0]}</span>
      <span className='badge text-bg-success me-1'>{data?.recipe?.dishType?.[0].charAt(0).toUpperCase() + data?.recipe?.dishType?.[0].slice(1)}</span>
      <span className='badge text-bg-success text-center'>{data?.recipe?.mealType?.[0].split('/')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('/')}
      </span>
      </div>
      </div>
      <div className="row healthLabels py-2 rounded"   ref={healthLabelsContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={() => setIsDown(false)}
            onMouseUp={() => setIsDown(false)}
            onMouseMove={handleMouseMove}>
        <div className="healthLabelsContainer">
        {
           
           data?.recipe?.healthLabels?.map((item, index) => (
             <span key={index} className="badge text-bg-success healthLabelItem mx-2">{item}</span>
           ))
        
      }
       </div>
      </div>
      <div className="ingredients">
      <h4 className="mx-auto text-center fw-bold p-2 py-3 rounded shadow mt-2">Ingredients</h4>
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-2 mx-auto">
    {
      data?.recipe?.ingredients?.map((item, index) => (
        <div className="col " key={index}>
          <Link to={`/details/food/${item?.food?.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}`}
            className='rounded p-2 shadow ingLink  d-flex justify-content-center align-items-center'
          >
            {item?.text}
          </Link>
        </div>
      ))
    }
  </div>

        
      </div>
    
    </div>
  </div>
</div>
</div>
    </div>
    <div className='nutrientsContainer'>
      <h3 className='display-6 text-center nutrientsTitle p-3 rounded border'> Nutrients</h3>
      <div className='my-2 my-sm-4 dailyValues p-3 rounded text-center'>
        <h3 className=' mb-3 pb-3 border-bottom'>Daily Nutrients ( 100g )</h3>
        <div className='row'>
          {dailyNutrients.map((nutrient, index) => {
            return(
              <div key={index} className='col-lg-3 col-6 mb-4'>
              <h5>{nutrient.label} - {nutrient.unit}{nutrient.quantity}</h5>
              <Pie data={createPieData(nutrient?.label, nutrient?.quantity)} options={createPieOptions(nutrient)} />
            </div>
            )
           
          })}
        </div>
      </div>
      <div className='my-2 my-sm-4 totalValues p-3 rounded text-center'>
        <h3 className='pb-3 border-bottom '>Total Nutrients ( 100g )</h3>
        <div style={{ height: '400px', width: '100%' }}>
          <Bar 
            data={createBarData(totalNutrientsQuantity)} 
            options={createBarOptions(totalNutrientsQuantity)} 
          />
        </div>
      </div>
    </div>
  </StyledRecipeDetails>
    :
    <LoadinComp/>
  )
}

export default RecipeDetailComp








