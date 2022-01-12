import { render } from '@testing-library/react';
import React from 'react'

const index = ({ activeModal }) => {

 const renderNutrients = () => {
  const wantedNutrients = ['Sugars, total including NLEA', 'Total lipid (fat)', 'Protein', 'Carbohydrates', 'Energy'];
  if(!!activeModal.foodNutrients){
   let foundNutrients = activeModal.foodNutrients.filter(food => wantedNutrients.includes(food.nutrient.name))
   return foundNutrients.map(ele => {
     return <div key={ele.nutrient.name}>
       <p>{ele.nutrient.name} {ele.amount} {ele.nutrient.unitName}</p>
     </div>
   })
  }
 }

 return (
  <div>
   <h1>{activeModal.description}</h1>
   { renderNutrients() }
  </div>
 )
}

export default index
