import {useContext} from 'react'
import functions from '../../utils/functions'
import { BasketDataContext } from '../../utils/context/basket'
import { Button } from 'react-bootstrap';


const Index = ({ item, handleActiveItem, addCartItem, removeCartItem }) => {
 const [ BasketData, setBasketData ] = useContext(BasketDataContext);

 const handleBtn = (e) => {
  e.stopPropagation();
  if(e.target.name === "add") addCartItem(item);
  if(e.target.name === "remove") removeCartItem(item);
 }

 const renderBtn = () => {
  if(BasketData.includes(item)){
   return <Button variant="primary" onClick={(event) => handleBtn(event)} name="remove">Remove Item</Button>
  }else{
   return <Button variant="outline-secondary" onClick={(event) => handleBtn(event)} name="add">Add to Basket</Button>
  }
 }

 const getCals = (item) => {
  return functions.calCal(item)
 }
 
 return (
  <tr onClick={() => handleActiveItem(item)} className="item-row">
   <td>{item.fdcId}</td>
   <td>{item.description}</td>
   <td>{renderBtn()}</td>
   <td>{getCals(item)}</td>
  </tr>
 )
}

export default Index
