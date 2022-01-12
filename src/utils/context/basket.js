import React, { createContext, useEffect, useState } from 'react';

export const BasketDataContext = createContext();

export const BasketProvider = (props) => {
  const [BasketData, setBasketData] = useState([]);

  return (
    <BasketDataContext.Provider
      value={[BasketData, setBasketData]}
    >
      {props.children}
    </BasketDataContext.Provider>
  );
};