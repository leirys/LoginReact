import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';
function App() {
  return (
  
    <BrowserRouter>
    <Switch>
      <Route  path="/" exact render={props=> (<Login{...props}/>)}/>
      <Route  path="/List" exact render={props=> (<List{...props}/>)}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
