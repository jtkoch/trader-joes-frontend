import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../Utils/axiosWithAuth';

const MainUI = () => {
  const [items, setItems] = useState([]);
  const [savedItem, setSavedItem] = useState({
    name: "",
    price: "",
    category: "",
  });
  console.log(savedItem)

  useEffect(() => {
    axiosWithAuth()
      .get("/api/items")

      .then(res => {
        console.log(items)
        setItems(res.data)
      })

      .catch(err => {
        console.log(err);
      })
  }, [])

  console.log(items)

  const userID = localStorage.getItem("userid")

  useEffect(() => {
    axiosWithAuth()
      .post(`/api/users/${userID}`, savedItem)

      .then(res => {
        console.log(res);
      })

      .catch(err => {
        console.log(err.message);
      })
  }, [savedItem, userID])

  const ClickHandler = (e) => {
    const id = e.target.value;
    const theItem = items[id - 1];
    console.log(theItem);
    setSavedItem({
      name: theItem.name,
      price: theItem.price,
      category: theItem.category,
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
          {items.map(items => {
            return (
              <div key={items.id} className="items-card">
                <h1>Name: {items.name}</h1>
                <h2>Price: {items.price}</h2>
                <h3>Category: {items.category}</h3>
                <div>
                  <button value={items.id} onClick={(e) => handleDelete(e)}>X</button>
                  <button value={items.id} onClick={(e) => ClickHandler(e)}>Save</button>
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