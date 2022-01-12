import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Basket = () => {
 const [basket, setBasket] = useState([]);

 useEffect(() => {
  let localStorageData = localStorage.getItem("basket");
  setBasket(JSON.parse(localStorageData));
 }, [])

 
 const renderBasket = () => {
  return basket.map(ele => {
   return <div className="basket-items">
    { ele.description }
   </div>
  })
 };

 return (
  <div>
   <Link to={{
    pathname: '/',
   }}>Back to Home</Link>
   <h1>Basket</h1>
   {basket.length > 0 ? renderBasket() : null}
  </div>
 )
}

export default Basket
