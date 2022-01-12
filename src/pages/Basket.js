import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button, ListGroup, Row, Col, Container } from 'react-bootstrap';
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

 
 const renderBasket = () => {
  // Item name, Caloric Count, Total Calorie Count, Assume only 1 of each item can be added to basketAssume only 1 of each item can be added to basket

  return basket.map(ele => {
   return <ListGroup.Item className="basket-items">
    <ListGroup horizontal>
     <ListGroup.Item>
      Name: { ele.description }
     </ListGroup.Item>
     <ListGroup.Item>
      { functions.calCal(ele) } kcal
     </ListGroup.Item>
    </ListGroup>
   </ListGroup.Item>
  })
 };

 return (
  <div>
   <Link to={{
    pathname: '/',
   }}>Back to Home</Link>
   <h1>Basket Total Caloric Count: {totalCalCount} kcal</h1>
   
   <ListGroup>
    {basket.length > 0 ? renderBasket() : null}
   </ListGroup>
  </div>
 )
}

export default Basket
