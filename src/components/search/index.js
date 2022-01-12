import { useState, useEffect, useContext } from 'react'
import functions from '../../utils/functions'
import { BasketDataContext } from '../../utils/context/basket'
import { PageSizeDataContext } from '../../utils/context/pageSize'
import { PageNumberDataContext } from '../../utils/context/pageNumber'


const Index = ({ consumeRequestData, searchSave }) => {
  const [search, setSearch] = useState("");
  const [BasketData, setBasketData] = useContext(BasketDataContext);
  const [PageSize, setPageSize] = useContext(PageSizeDataContext);
  const [PageNumber, setPageNumber] = useContext(PageNumberDataContext);

  const inputHandler = (e) => {
    setSearch(e.target.value);
  }

 const submitHandler = async () => {
  let requestData = await functions.getItems(search, PageSize, PageNumber);
  consumeRequestData(requestData);
  searchSave(search);
}

 return (
  <div>
   <h1>Search</h1>
   <input type="text" name="" id="" onChange={(event) => { inputHandler(event)}} value={search}/>
   <button onClick={() => submitHandler()}>Submit</button>
  </div>
 )
}

export default Index
