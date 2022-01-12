import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Accordion, Row, Col, Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import functions from '../utils/functions'


const Basket = () => {
 const [basket, setBasket] = useState([]);
 const [totalCalCount, setTotalCalCount] = useState(0);

 useEffect(() => {
  let localStorageData = localStorage.getItem("basket");
  let localStorageCount = localStorage.getItem("calCount")
  setBasket(JSON.parse(localStorageData));
  setTotalCalCount(JSON.parse(localStorageCount));
 }, [])


 const renderNurtients = (item) => {
  return item.foodNutrients.map(ele => {
   return <ListGroup>
     <ListGroupItem>
      {ele.nutrientName}: {ele.value} {ele.unitName}
     </ListGroupItem>
   </ListGroup>
  })
 }

 const updateBasket = (basketCopy) => {
  setBasket(basketCopy);
  localStorage.removeItem("basket");
  localStorage.setItem("basket", JSON.stringify(basketCopy));
 }


 const removeItem = (item) => {
  setTotalCalCount(totalCalCount - functions.calCal(item))
  let itemIdx = basket.indexOf(item);
  let basketCopy = [...basket]
  basketCopy.splice(itemIdx, 1);
  updateBasket(basketCopy);
 }


 
 const renderBasket = () => {
  return basket.map(ele => {
   return <Accordion.Item eventKey={basket.indexOf(ele)} className="basket-items">
    <Accordion.Header>
     <Row>
      <Col>
       Name: { ele.description } { functions.calCal(ele) } kcal
      </Col>
      <Col xs={3}>
       <Button onClick={() => removeItem(ele)}>Remove</Button>
      </Col>
     </Row>
    </Accordion.Header>
    <Accordion.Body>
     {renderNurtients(ele)}
    </Accordion.Body>
   </Accordion.Item>
  })
 };

 return (
  <Container>
   <Link to={{
    pathname: '/',
   }}>Back to Home</Link>
   <h1>Basket Total Caloric Count: {totalCalCount} kcal</h1>
   
   <Accordion>
    {basket.length > 0 ? renderBasket() : null}
   </Accordion>
  </Container>
 )
}

export default Basket
