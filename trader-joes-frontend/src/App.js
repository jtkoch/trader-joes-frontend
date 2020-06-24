import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './components/SavedList/SavedList'
import ItemList from './components/ItemList/ItemList'
import Item from './components/Item/Item'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = item => {
    setSavedList( [...savedList, item] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={ItemList} />
      <Route path='/items/:id' render={(routeProps) => <Item {...routeProps} addToSavedList={addToSavedList}/>} />
    </div>
  );
};

export default App;