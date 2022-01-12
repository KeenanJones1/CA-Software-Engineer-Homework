import { useState, useContext } from 'react'
import functions from '../../utils/functions'
import { PageSizeDataContext } from '../../utils/context/pageSize'
import { PageNumberDataContext } from '../../utils/context/pageNumber'
import { Form, Button } from 'react-bootstrap';


const Index = ({ consumeRequestData, searchSave }) => {
  const [search, setSearch] = useState("");
  const [PageSize, setPageSize] = useContext(PageSizeDataContext);
  const [PageNumber, setPageNumber] = useContext(PageNumberDataContext);

  const inputHandler = (e) => {
    setSearch(e.target.value);
  }

 const submitHandler = async () => {
  let requestData = await functions.getItems(search, PageSize, PageNumber);
  if(!!requestData && Object.keys(requestData).length > 0){
    consumeRequestData(requestData);
    searchSave(search);
  }else{
    alert("Problem sending request")
  }
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
   <Form.Text type="text" name="query-text" id="query-text" />
   <Button variant="outline-primary" onClick={() => submitHandler()}>Submit</Button>
  </div>
 )
}

export default Index