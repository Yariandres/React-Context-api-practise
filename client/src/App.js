import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Details } from './components/details/Details';
import { Nav } from './components/navigation/Nav';
import { GlobalProvider } from './context/GlobalState';

import "./App.css";

const App = () => (
  <GlobalProvider>
    <div className="App">
      <Router>
        <Nav />
        <Switch>        
          <Route exact path={"/"} component={ Home }/>
          <Route exact path={"/details/:id"} component={ Details }/>
        </Switch>
      </Router>        
    </div>
  </GlobalProvider>
);
export default App;
