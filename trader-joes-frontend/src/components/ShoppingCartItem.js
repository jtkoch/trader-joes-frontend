import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">


			<div>
				<h1>{props.name}</h1>
				<p>${props.price}</p>
				<button>Remove from list</button>
			</div>
		</div>
	);
};

export default Item;
