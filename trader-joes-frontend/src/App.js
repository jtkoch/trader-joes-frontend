import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './components/SavedList/SavedList'
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item/Item'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      savedList: []
    }
  }

  addToSavedList = (item) => {
    console.log(this.state.savedList)
    const savedList = this.state.savedList;
    savedList.push(item);
    this.setState({savedList});
  }

  render(){
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={ItemList} />
        <Route path="/items/:id" render={ (props) => {
          return(<Item {...props} addToSavedList={this.addToSavedList}/>)
        }} />
      </div>
    )
  }
}