import { useState, useEffect, useContext } from 'react'
import functions from '../../utils/functions'
import { BasketDataContext } from '../../utils/context/basket'
import { PageSizeDataContext } from '../../utils/context/pageSize'
import { PageNumberDataContext } from '../../utils/context/pageNumber'
import { Container, Form, Button } from 'react-bootstrap';


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
  <div className="my-5 px-2">
   <Form.Label htmlFor="searchInput">Search</Form.Label>
   <Form.Control
    size="lg"
    type="text"
    id="searchInput"
    aria-describedby="searchInputBlock"
    onChange={(event) => { inputHandler(event)}} value={search}
  />
   <Form.Text type="text" name="" id="" />
   <Button variant="outline-primary" onClick={() => submitHandler()}>Submit</Button>
  </div>
 )
}

export default Index
