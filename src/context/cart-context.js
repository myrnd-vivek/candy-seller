import { createContext, useContext, useState } from "react";

const CartContext = createContext({
	cartItem: [],
	addToCart: () => {},
	increaseQty: (id) => {},
	decreaseQty: (id) => {},
});

const CartProvider = ({ children }) => {
	const [cartItem, setCartItem] = useState([]);

	const addToCart = (candy) => {
    setCartItem((prev) => [...prev,candy])
  };

	const increaseQty = (id) => {
    const newCandy = cartItem.map((candy) => {
      if(candy.id == id) {
        candy.qty += 1;
      }
      return candy;
    })
    setCartItem(newCandy);
  };
	const decreaseQty = (id) => {
    const newCandy = cartItem.map((candy) => {
      if(candy.id == id) {
        candy.qty -= 1;
      }
      return candy;
    })
    setCartItem(newCandy.filter(candy => candy.qty != 0));
  };

	const cartContext = {
		cartItem,
    addToCart,
		increaseQty,
		decreaseQty,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};

export default CartProvider;
