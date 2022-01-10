import {useState, useEffect} from 'react'
const API_KEY = process.env.REACT_APP_API_KEY


const App = () => {
  const [search, setSearch] = useState("")

  const inputHandler = (e) => {
    setSearch(e.target.value);
  }

  const submitHandler = () => {
    console.log(API_KEY)
  }

  return (
    <div>
      <input type="text" name="" id="" onChange={(event) => { inputHandler(event)}} value={search}/>
      <button onClick={() => submitHandler()}>Submit</button>
    </div>
  )
}

export default App

