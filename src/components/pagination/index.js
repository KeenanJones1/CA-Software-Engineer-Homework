import React, {useContext, useState, useEffect} from 'react'
import { Pagination, PageItem } from 'react-bootstrap'
import { PageNumberDataContext } from '../../utils/context/pageNumber'

const Index = ({ pageList, paginate }) => {
  const [PageNumber, setPageNumber] = useContext(PageNumberDataContext);

 const renderPages = () => {
  return pageList.map(page => {
    return <PageItem active={PageNumber === page ? true : false } onClick={() => paginate(page)}>{page}</PageItem>
  })
}

 return (
  <Pagination className="justify-content-md-center">
   { pageList.length > 0 ? renderPages() : null }
  </Pagination>
 )
}

export default Index
