import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import FormikLoginForm  from './components/LoginForm/LoginForm'
import FormikRegister from './components/Register/Register'
import ProtectedRoute from './Utils/PrivateRoute'
import MainUI from './components/MainUI/MainUI'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/loginform" component={FormikLoginForm} />
      <Route exact path="/register" component={FormikRegister} />

      <ProtectedRoute exact path ="/mainui" component ={MainUI} />
    </div>
  );
}

export default App;
