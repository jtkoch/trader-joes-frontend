import React from 'react'

const ItemCard = (props) => {
  const {name, price, category} = props.item;
  return (
    <div className="item-card">
      <h2>{name}</h2>
      <div className="item-price">
        Price: <em>{price}</em>
      </div>
      <div className="item-category">
        Category: <strong>{category}</strong>
      </div>
    </div>
  )
}

export default ItemCard