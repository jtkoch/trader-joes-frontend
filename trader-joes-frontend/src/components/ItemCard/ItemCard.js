import React from 'react';
import {Link} from 'react-router-dom'

const ItemCard = props => {

  const { name, price, category } = props.item

  return (
    <div className="item-card">
    <Link to={`/items/${props.item.id}`}><h2>{name}</h2></Link>
      <div className="item-price">
        Price: <em>{price}</em>
      </div>
      <div className="item-category">
        Category: <strong>{category}</strong>
      </div>
    </div>
  )
};

export default ItemCard;