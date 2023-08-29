import React from "react";
import { useCandyContext } from "../context/candy-context";
import CandyDetail from "./CandyDetail";

export const ListCandy = () => {
	const { candies } = useCandyContext();
	return (
		<div>
			<div style={{display: 'flex'}}>
				<p>Name</p>
				<p>Description</p>
				<p>Price</p>
			</div>
			{
        candies.map((candy,index) => <CandyDetail key={candy.id} candy={candy} />)
      }
		</div>
	);
};
