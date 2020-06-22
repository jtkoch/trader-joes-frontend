import React, { Component } from 'react';
import axios from 'axios';
import ItemCard from '../ItemCard/ItemCard'
import { Link } from 'react-router-dom';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios
      .get('https://trader-joes-shopping-list.herokuapp.com/api/items')
      .then(response => {
        this.setState(() => ({ items: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="item-list">
        {this.state.items.map(item => (
          <ItemDetails key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

function ItemDetails({ item }) {
  return (
    <Link to={`/items/${item.id}`}>
      <ItemCard item={item} />
    </Link>
  );
}