import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Details } from './components/details/Details'


import "./App.css";

const App = () => ( 
  <div className="App">
    <Router>
      <Switch>
        <Route exact path={"/"} component={ Home }/>
        <Route exact path={"/details/:id/1"} component={ Details }/>
      </Switch>
    </Router>
        
  </div>
);

export default App;