import React from 'react';
import { Route, Link } from "react-router-dom";


import Signup from '../src/components/Signup';
import Users from '../src/components/Users'
import Login from '../src/components/Login';
import Cities from './components/Cities';
import UserCities from './components/UserCities';
// import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/signup" render = {props => (<Signup {...props}/>)} />
      <Route exact path="/protected" component={Cities} />
      <Link to = "/signup">Signup</Link>
    <Route exact path = '/login' render = {props => (<Login {...props}/>)}/>
    <Route exact path="/usercities" component={UserCities} />
     
      <Link to = "/login">Login</Link>
    </div>
  );
}

export default App;
