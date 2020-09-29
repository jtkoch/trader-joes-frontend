import React from 'react';

const Product = props => {
	return (
		<div className="product">
			<h1 className="name">{props.product.name}</h1>
			<p className="price">${props.product.price}</p>
			<p className="category">{props.product.category}</p>
			<button onClick={() => props.addItem(props.product)}>
				Add to list
			</button>
		</div>
	);
};

export default Product;