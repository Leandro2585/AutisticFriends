import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import LogonUser from './pages/Logon/User.jsx';
import LogonNeuro from './pages/Logon/Neuro.jsx';
import RegisterUser from './pages/Register/User.jsx';
import RegisterNeuro from './pages/Register/Neuro.jsx';
import Main from './pages/Main';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/logon/user" component={LogonUser}/>
        <Route path="/logon/instructor" component={LogonNeuro}/>
        <Route path="/register/user" component={RegisterUser}/>
        <Route path="/register/instructor" component={RegisterNeuro}/>
        <Route path="/profile" component={Main}/>
        <Redirect from="/logon" to="/logon/user"/>
        <Redirect from="/register" to="/register/user"/>
      </Switch>
    </BrowserRouter>
  );
}
