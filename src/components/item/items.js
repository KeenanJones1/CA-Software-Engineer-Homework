import React from 'react'
import Item from './index'
import { Table } from 'react-bootstrap';

const Items = ({ items, handleActiveItem, addCartItem, removeCartItem }) => {

 const renderItems = (resultItems) => {
  return resultItems.map( item => {
   return <Item key={item.fdcId} item={item} handleActiveItem={handleActiveItem} addCartItem={addCartItem} removeCartItem={removeCartItem}/>
  })
 }


 return (
  <Table striped bordered hover>
   <thead>
    <tr>
     <th>fdcId#</th>
     <th>Description</th>
     <th></th>
     <th>Cals</th>
    </tr>
   </thead>
   <tbody>
    {items.length > 0 ? renderItems(items) : null}
   </tbody>
  </Table>
 )
}

export default Items
