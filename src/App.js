import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/Home';


import "./App.css";

const App = () => ( 
  <div className="App">
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home}/>
      </Switch>
    </Router>
        
  </div>
);

export default App;