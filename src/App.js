import {useState, useEffect, useContext} from 'react'
import functions from './utils/functions'
import Basket from './components/basket/index'
import Pagination from './components/pagination/index'
import Search from './components/search/index'
import Modal from './components/modal/index'
import Items from './components/item/items'
import { BasketDataContext } from './utils/context/basket'
import { PageSizeDataContext } from './utils/context/pageSize'
import { PageNumberDataContext } from './utils/context/pageNumber'





const App = () => {
  const [BasketData, setBasketData] = useContext(BasketDataContext);
  const [PageSize, setPageSize] = useContext(PageSizeDataContext);
  const [PageNumber, setPageNumber] = useContext(PageNumberDataContext);
  const [pageList, setPageList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalHits, setTotalHits] = useState(1);
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState({});
  const [basketCalories, setBasketCalories] = useState(0);
  const [search, setSearch] = useState("")
  

  useEffect(() => {
    let savedBasket = JSON.parse(localStorage.getItem("basket"))
    if(!!savedBasket){
      setBasketCalories(functions.calCals(savedBasket));
      setBasketData(savedBasket);
    }
  }, [])

  // function to receive state from request
  const consumeRequestData = (data) => {
    if(!!data){
      setPageList(data.pageList)
      setItems(data.foods);
      setPageNumber(data.currentPage)
      setTotalHits(data.totalHits)
      setTotalPages(data.totalPages)
    }else{
      alert("Processing Request");
    }
  };

  // save query string to app state
  const searchSave = (query) => {
    setSearch(query)
  }


  const paginate = async (page) => {
    setPageNumber(page);
    let data = await functions.getItems(search, PageSize, page);
    consumeRequestData(data);
  }


  // opens modal and adds an item to activeItem variable to be displayed in modal
  const openModal = async (item) => {
    // setModalOpen(true);
    // 
    // .then(data => data.json())
    // .then(data => {
    //   setActiveModal(data)
    // })
  }

  // add item calories to basket total calories
  const addCals = (item) => {
    const energy = item.foodNutrients.find(ele => ele.nutrientName == 'Energy').value;
    if(typeof energy == 'number' && energy >= 0){
      let tempCals = basketCalories + energy;
      setBasketCalories(tempCals);
    }
  }

  // remove item calories from basket total calories
  const removeCals = (item) => {
    const energy = item.foodNutrients.find(ele => ele.nutrientName == 'Energy').value;
    if(typeof energy == 'number' && basketCalories - energy >= 0){
      let tempCals = basketCalories - energy;
      setBasketCalories(tempCals);
    }
  }

  // save clicked item to state
  const handleActiveItem = async (activeItem) => {
    let requestedItem = await functions.getItem(activeItem.fdcId)
    setActiveModal(requestedItem)
  }

  // add Item to basket and adds cals from total in basket
  const addCartItem = (item) => {
    if(!BasketData.includes(item)){
      setBasketData([...BasketData, item]);
      addCals(item)
    }else{
      alert("Item already added to Basket")
    }
  }

  // remove Item from basket and substracts cals from total in basket
  const removeCartItem = (item) => {
    let itemIdx = BasketData.indexOf(item);
    if(itemIdx > -1){
      let basketCopy = [...BasketData];
      basketCopy.splice(itemIdx, 1);
      setBasketData(basketCopy);
      removeCals(item)
    }else{
      alert("Issue with removing item from basket")
    }
  }

  // empty basket and localStorage.
  const emptyBasket = () => {
    let confirmation = window.confirm("Are you sure you want to empty your cart?");
    if(confirmation){
      localStorage.removeItem('basket');
      setBasketData([]);
      setBasketCalories(0);
    }
  }

  return (
    <div>
      <button onClick={() => emptyBasket()}>Empty Basket</button>
      <Basket basketCalories={basketCalories}/>
      <Search consumeRequestData={consumeRequestData} searchSave={searchSave}/>
      <Items items={items} handleActiveItem={handleActiveItem} addCartItem={addCartItem} removeCartItem={removeCartItem}/>
      <Pagination paginate={paginate} pageList={pageList}/>
      {Object.keys(activeModal).length > 0 ? <Modal activeModal={activeModal}/> : null}

      {/* <div className="modal">
        { modalOpen && !!activeModal ? renderModal(activeModal) : null }
      </div> */}
    </div>
  )
}

export default App

