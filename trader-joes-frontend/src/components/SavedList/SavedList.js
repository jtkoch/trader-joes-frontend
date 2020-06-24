import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Items:</h3>
    {props.list.map(item => (
      <span className="saved-item">{item.name}</span>
    ))}
    <Link to='/' className="home-button">Home</Link>
  </div>
);

export default SavedList;