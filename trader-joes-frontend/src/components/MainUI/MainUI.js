import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainUI = () => {
  const [items, setItems] = useState([]);
  const [savedItem, setSavedItem] = useState({
    user_id: null,
    name: "",
    price: "",
    category: "",
    item_id: null
  });
  console.log("Saved Items ", savedItem);

  console.log("Items ", items);

  useEffect(() => {
    axios
      .get("https://trader-joes-shopping-list.herokuapp.com/api/items")

      .then(res => {
        console.log(res);
        setItems(res.data);
      })

      .catch(err => {
        console.log(err);
      })
  }, [])

  const userID = localStorage.getItem("userid");

  useEffect(() => {
    axios
      .post(`https://trader-joes-shopping-list.herokuapp.com/api/users/${userID}`, savedItem)

      .then(res => {
        console.log(res);
      })

      .catch(err => {
        console.log(err.message);
      })
  }, [savedItem, userID])

  const ClickHandler = (e) => {
    const itemID = e.target.value;
    console.log(itemID);
    const theItem = items[itemID - 1];
    console.log(theItem);
    setSavedItem({
      user_id: theItem.id,
      name: theItem.name,
      price: theItem.price,
      category: theItem.category,
      item_id: theItem.item_id
    });
  }

  const handleDelete = (e) => {
    const id = e.target.value;
    const index = id - 1;
    const newItems = items.filter(item => {
      return item.id - 1 !== index;
    });
    setItems(newItems);
  }

  return (
    <div className="main-ui-container">
      <nav>
        <h3>Trader Joe's Shopping List</h3>
        <div>
          <Link to="/savedlist">Saved List</Link>
          <Link to="/mainui">Home</Link>
        </div>
      </nav>

      <div className="main-ui">
        <h1>Find Items</h1>
        <div className="items">
          {items.map(item => {
            return (
              <div key={item.id} className="item-card">
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                <p>{item.category}</p>
                <div>
                  <button value={item.id} onClick={(e) => handleDelete(e)}>X</button>
                  <button value={item.id} onClick={(e) => ClickHandler(e)}>Save</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>


    </div>
  )
}

export default MainUI;