import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';


export default class SavedList extends Component {
// eslint-disable-next-line 
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="saved-list">
        <h3 >Saved Items:</h3>
        {this.props.list.map( item => {
          return (
            <NavLink to={`/items/${item.id}`} key={item.id} activeClassName="saved-active">
              <span className="saved-item">{item.name}</span>
            </NavLink>
          )
        })}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
      </div>
    )
  }
}