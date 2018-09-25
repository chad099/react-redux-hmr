import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from "../App";
import Home from '../components/Home';
import Login from '../components/Login';
const Main = () => (
  <App>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  </App>
);

export default Main;