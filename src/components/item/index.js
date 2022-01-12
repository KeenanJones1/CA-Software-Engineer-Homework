import {useContext, useState, useEffect} from 'react'
import { BasketDataContext } from '../../utils/context/basket'


const Index = ({ item, handleActiveItem, addCartItem, removeCartItem }) => {
 const [BasketData, setBasketData] = useContext(BasketDataContext);

 const handleBtn = (e) => {
  e.stopPropagation();
  if(e.target.name === "add") addCartItem(item);
  if(e.target.name === "remove") removeCartItem(item);
 }

 const renderBtn = () => {
  if(BasketData.includes(item)){
   return <button onClick={(event) => handleBtn(event)} name="remove">Remove from Basket</button>
  }else{
   return <button onClick={(event) => handleBtn(event)} name="add">Add to Basket</button>
  }
 }

 return (
  <div onClick={() => handleActiveItem(item)}>
   <h1>{item.description}</h1>
   {renderBtn()}
  </div>
 )
}

export default Index
