import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './components/LoginForm/LoginForm'
import PrivateRoute from "./Utils/PrivateRoute.js"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
