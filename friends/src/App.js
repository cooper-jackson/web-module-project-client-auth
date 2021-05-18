import React, { Component, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import { axiosWithAuth } from './utils/axiosWithAuth';


function App() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            {localStorage.getItem("token") && <Link to="/friends">Protected Page</Link>}
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/friends" component={Friends}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
