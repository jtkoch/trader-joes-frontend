import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import FormikLoginForm  from './components/LoginForm/LoginForm'
import FormikRegister from './components/Register/Register'
import PrivateRoute from './Utils/PrivateRoute'
import MainUI from './components/MainUI/MainUI'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/loginform" component={FormikLoginForm} />
        <Route exact path="/register" component={FormikRegister} />

        <PrivateRoute exact path="/mainui" component={MainUI} />
      </Router>
    </div>
  );
}

export default App;
