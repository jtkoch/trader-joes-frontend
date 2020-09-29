import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const Item = props => {
    const { removeItem } = useContext(CartContext)
	return (
		<div className="shopping-cart_item">


			<div>
				<h1>{props.name}</h1>
				<p>${props.price}</p>
				<button onClick = {() => removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	)
}

export default Item