import React from 'react'
import Item from './index'

const Items = ({ items, handleActiveItem, addCartItem, removeCartItem }) => {

 const renderItems = (resultItems) => {
  return resultItems.map( item => {
   return <Item key={item.fdcId} item={item} handleActiveItem={handleActiveItem} addCartItem={addCartItem} removeCartItem={removeCartItem}/>
  })
 }


 return (
  <div>
   {items.length > 0 ? renderItems(items) : null}
  </div>
 )
}

export default Items
