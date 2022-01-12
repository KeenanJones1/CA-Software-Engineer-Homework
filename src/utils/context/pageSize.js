import React, { createContext, useEffect, useState } from 'react';

export const PageSizeDataContext = createContext();

export const PageSizeProvider = (props) => {
  const [PageSize, setPageSize] = useState(10);


  return (
    <PageSizeDataContext.Provider
      value={ [PageSize, setPageSize] }
    >
      {props.children}
    </PageSizeDataContext.Provider>
  );
};