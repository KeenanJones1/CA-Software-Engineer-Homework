import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const Index = ({ activeModal, handleClose, show }) => {

 const renderNutrients = () => {
  const wantedNutrients = ['Sugars, total including NLEA', 'Total lipid (fat)', 'Protein', 'Carbohydrates', 'Energy'];
  if(!!activeModal.foodNutrients){
   let foundNutrients = activeModal.foodNutrients.filter(food => wantedNutrients.includes(food.nutrient.name))
   return foundNutrients.map(ele => {
     return <Modal.Body key={ele.nutrient.name}>
       <p>{ele.nutrient.name} {ele.amount} {ele.nutrient.unitName}</p>
     </Modal.Body>
   })
  }
 }

 return (
  <Modal show={show}>
    <Modal.Header closeButton>
      <Modal.Title>{activeModal.description}</Modal.Title>
    </Modal.Header>
   { renderNutrients() }
   <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
 )
}

export default Index
