import React, { useState } from "react";
import { useCandyContext } from "../context/candy-context";

const AddCandy = () => {

  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');

  const { addCandy } = useCandyContext();

  const addClickHandler = (ev) => {
    // submit the value
    addCandy({
      name,
      description,
      price
    })
    setName('');
    setDescription('');
    setPrice('');
  }
	return (
		<div>
			<div>
				<label>Name</label>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div>
				<label>Description</label>
				<input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
			</div>
			<div>
				<label>Price</label>
				<input type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} />
			</div>
			<button onClick={addClickHandler}>Add</button>
		</div>
	);
};

export default AddCandy;
