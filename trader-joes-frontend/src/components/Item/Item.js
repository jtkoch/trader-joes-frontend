import React from 'react';
import axios from 'axios';

export default class Item extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      item_id: "",
      name: "", 
      price: "", 
      category: ""
    };
  }

  componentDidMount() {
    this.fetchItem(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchItem(newProps.match.params.id);
    }
  }

  fetchItem = (id) => {
    axios
      .get(`https://trader-joes-shopping-list.herokuapp.com/api/items/${id}`)
      .then(response => {
        this.setState(() => ({ item: response.data }))
      })
      .catch(error => {
        console.error(error);
      });
  }

  saveItem = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.item)
  }
  
  render() {
    if(!this.state.item) {
      return <div>Loading item information...</div>
    }
    
    return (
      <div className="save-wrapper">
        <div className="save-button" onClick={this.saveItem}>Save</div>
      </div>
    );
  }
}