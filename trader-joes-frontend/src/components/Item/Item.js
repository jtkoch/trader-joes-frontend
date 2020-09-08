import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../ItemCard/ItemCard';

const Item = (props) => {
  const [item, setItem] = useState();
 
  useEffect(() => {
    const id = props.match.params.id;

       axios
        .get(`https://trader-joes-shopping-list.herokuapp.com/api/items/${id}`)
        .then(response => {
          setItem(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);

  const saveItem = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(item)
  }

  if (!item) {
    return <div>Loading item information...</div>;
  }

  return (
    <div className="save-wrapper">
      <ItemCard item={item} />
      <div className="save-button" onClick= {saveItem}>Save</div>
    </div>
  );
}

export default Item;