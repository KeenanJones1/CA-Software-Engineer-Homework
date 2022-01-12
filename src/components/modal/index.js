import { useEffect } from 'react'
import { Modal, Button, Spinner, Row, Col } from 'react-bootstrap';

const Index = ({ activeItem, handleClose, show, loading }) => {

  useEffect(() => {},
  [activeItem, loading])

 const renderNutrients = () => {
  const wantedNutrients = ['Sugars, total including NLEA', 'Total lipid (fat)', 'Protein', 'Carbohydrates', 'Energy'];
  if(!!activeItem.foodNutrients){
   let foundNutrients = activeItem.foodNutrients.filter(food => wantedNutrients.includes(food.nutrient.name))
   return foundNutrients.map(ele => {
     return <Modal.Body key={ele.nutrient.name}>
       <p>{ele.nutrient.name} {ele.amount} {ele.nutrient.unitName}</p>
     </Modal.Body>
   })
  }
 }

 
 const renderModal = () => {
  return(
    <>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>{ activeItem.brandOwner ? <span>{ activeItem.brandOwner }</span> : "" } { activeItem.brandName ? activeItem.brandName : "" } {activeItem.description} </Modal.Title>
      </Modal.Header>
        { renderNutrients() }
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  )
 }

 const renderLoading = () => {
  return (
    <>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Loading</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="justify-content-center">
              <Spinner animation="border" variant="primary" />
            </Col>
          </Row>
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  )
 }
 
 return (
  <Modal show={show}>
   { !loading ? renderModal() : renderLoading() }
  </Modal>
 )
}

export default Index
