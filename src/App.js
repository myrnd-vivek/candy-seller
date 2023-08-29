import React from 'react'
import CandyProvider from './context/candy-context'
import AddCandy from './components/AddCandy'
import { ListCandy } from './components/ListCandy'
import Cart from './components/Cart/CartItem'
import CartProvider from './context/cart-context'

const App = () => {
  return (
    <CandyProvider>
      <CartProvider>
        <Cart />
        <AddCandy />
        <ListCandy />
      </CartProvider>
    </CandyProvider>
  )
}

export default App