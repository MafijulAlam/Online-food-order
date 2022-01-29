import React,{useState} from 'react'
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

const App = (props) => {

  const [cartShow, setCartShow] = useState(false)

  const showCardHandler = () => {
    setCartShow(true)
  }


  const hideCardHendler = () => {
     setCartShow(false)
  }


  return (
    <CartProvider>
      {cartShow && <Cart onClose={hideCardHendler}/>}
      <Header onclick={showCardHandler}/>
      <main>
          <Meals/>
      </main>
    </CartProvider>
  )
}

export default App
