import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { StyledFoodDetails } from '../Styled/StyledFoodDetails';
import ErrorComp from './ErrorComp';
import LoadinComp from './LoadinComp';
import { callback } from 'chart.js/helpers';

function FoodDetailComp({data}) {
    // console.log(data)

    const nutrients = data?.food?.nutrients;
    const chartData = {
      labels: ['Protein (g)', 'Fat (g)', 'Carbs (g)'],
      datasets: [
        {
          label: `Nutrients For 100g / ${(nutrients?.ENERC_KCAL)?.toFixed(2) || 0} Kcal`,
          data: [
            nutrients?.PROCNT || 0,
            nutrients?.FAT || 0,
            nutrients?.CHOCDF || 0,

          ],
          backgroundColor: '#ecf0f1',
          borderColor: '#ecf0f1',
          borderWidth: 1,
        },
      ],
    };
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#ecf0f1', 
          },
        },
         tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.raw}g`; 
                    },
                    title: function () {
                        return 'Nutrients For  100g'; 
                    },
                },
                bodyColor: '#ecf0f1',
            },
      },
      scales: {
        x: {
          ticks: {
            color: '#ecf0f1', 
          },
          grid: {
            color: '#e67e22',
          },
        },
        y: {
          ticks: {
            color: '#ecf0f1', 
          },
          grid: {
            color: '#e67e22', 
          },
        },
      },
    };

  return (
    
  data  ?

     ( <StyledFoodDetails className='container rounded'>
    <div className="card p-4">
      <div className="row">
      <h3 className='dipslay-5 detailTitle pb-2 mb-2 text-center'>Food / <strong className='p-1 rounded'>{data?.food?.label}</strong> </h3>
      <div className="img-wrap col-lg-6 ">
       <img  className='card-image rounded' src={data?.food?.image} alt={`${data?.food?.label} Image`} />
      </div>
      <div className="card-body col-lg-6">
      <div className="canvas-container">
      <Bar data={chartData} options={chartOptions} />
      </div>
      </div>
      </div>
    </div>
    </StyledFoodDetails>)

  :

    <LoadinComp/>

    
    
  )
}

export default FoodDetailComp