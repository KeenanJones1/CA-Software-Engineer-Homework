import React, {useContext, useState, useEffect} from 'react'


const Index = ({ pageList, paginate }) => {

 const renderPages = () => {
  return pageList.map(page => {
    return <div onClick={() => paginate(page)}>{page}</div>
  })
}

 return (
  <div>
   { pageList.length > 0 ? renderPages() : null }
  </div>
 )
}

export default Index
