import { useContext } from 'react'
import functions from '../../utils/functions'
import { Link } from 'react-router-dom';
import { BasketDataContext } from '../../utils/context/basket'
import { Container, Row } from 'react-bootstrap';

const Index = ({ basketCalories }) => {
 const [BasketData, setBasketData] = useContext(BasketDataContext);

 const goToBasket = () => {
  localStorage.setItem('basket', JSON.stringify(BasketData));
  localStorage.setItem("calCount", functions.calCals(BasketData));
 }

 return (
  <Link onClick={() => goToBasket()} to="/basket">
   <Container className="my-4">
    <Row className="row align-items-center">
     <h1 className="text-center">Caloric Total: {basketCalories}</h1>
     <span className="text-center">Basket Items: {BasketData.length}</span>
    </Row>
   </Container>
  </Link>
 )
}

export default Index
