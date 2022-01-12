const functions = {
 // adds item to basket returns basket. 
 addItem: (item, basket) => {
  if(!!item && !!item.name){
   let basketCopy = [...basket]
   return [...basketCopy, item];
  }else{
   return basket;
  }
 },

 // removes item from basket, returns basket.
 removeItem: (item, basket) => {
  if(basket.includes(item)){
   const itemIdx = basket.indexOf(item);
   basket.splice(itemIdx, 1);
   return basket;
  }else{
   return basket;
  }
 },
};

export default functions