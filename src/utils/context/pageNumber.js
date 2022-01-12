import React, { createContext, useEffect, useState } from 'react';

export const PageNumberDataContext = createContext();

export const PageNumberProvider = (props) => {
  const [PageNumber, setPageNumber] = useState(1);


  return (
    <PageNumberDataContext.Provider
      value={ [PageNumber, setPageNumber] }
    >
      {props.children}
    </PageNumberDataContext.Provider>
  );
};