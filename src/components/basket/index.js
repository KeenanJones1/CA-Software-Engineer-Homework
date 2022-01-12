import { useContext } from 'react'
import { Link } from 'react-router-dom';
import Basket from '../../pages/Basket';
import { BasketDataContext } from '../../utils/context/basket'

const Index = ({ basketCalories }) => {
 const [BasketData, setBasketData] = useContext(BasketDataContext);

 const goToBasket = () => {
  localStorage.setItem('basket', JSON.stringify(BasketData));
 }

 return (
  <Link onClick={() => goToBasket()} to="/basket">
   <h1>{basketCalories}</h1>
   <span>{BasketData.length}</span>
  </Link>
 )
}

export default Index
