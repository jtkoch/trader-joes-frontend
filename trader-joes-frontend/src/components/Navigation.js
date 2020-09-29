import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

const Navigation = () => {
	const { cart } = useContext(CartContext)

	return (
		<div className="navigation">
			<NavLink to="/">Items</NavLink>
			<NavLink to="/cart"><i className="material-icons">shopping_cart</i><span>{cart.length}</span></NavLink>
		</div>
	)
}

export default Navigation