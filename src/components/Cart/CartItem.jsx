import React from "react";
import { useCartContext } from "../../context/cart-context";

const Cart = () => {
	const { cartItem, increaseQty, decreaseQty } = useCartContext();
	return (
		<div
			style={{ display: "flex", flexDirection: "column" }}
			className="cart__container"
		>
			Cart Items - {cartItem.length}
			{cartItem.map((item) => {
				return (
					<div key={item.id} className="cart__details">
						<p>{item.name}-</p>
						<p>${item.price}-</p>
						<p>{item.qty}</p>
						<div>
							<button onClick={() => decreaseQty(item.id)}>
								-
							</button>
							<button onClick={() => increaseQty(item.id)}>
								+
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cart;
