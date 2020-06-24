import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = props => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const getItems = () => {
      axios
        .get('https://trader-joes-shopping-list.herokuapp.com/api/items')
        .then(response => {
          setItems(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getItems();
  }, []);
  
  return (
    <div className="item-list">
      {items.map(item => (
        <Link to={`/items/${item.id}`}>
          <ItemCard key={item.id} item={item} />
        </Link>
      ))}
    </div>
  );
}

export default ItemList