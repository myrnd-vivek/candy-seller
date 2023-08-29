import React from "react";
import { useCartContext } from "../context/cart-context";

const CandyDetail = ({ candy }) => {
  const { addToCart } = useCartContext();
  const buyClickHandler = (qty) => {
    console.log({...candy,qty});
    addToCart({...candy,qty})
  }
	return (
		<div style={{ display: "flex", alignItems: 'center'}}>
			<p>{candy.name}-</p>
			<p>{candy.description}-</p>
			<p>{candy.price}</p>
			<div>
				<button onClick={() => buyClickHandler(1)}>Buy 1</button>
				<button onClick={() => buyClickHandler(2)}>Buy 2</button>
				<button onClick={() => buyClickHandler(3)}>Buy 3</button>
			</div>
		</div>
	);
};

export default CandyDetail;
