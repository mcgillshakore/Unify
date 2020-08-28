import React, { Component } from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import { Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <div>
          <Nav/>
        </div>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
    </div>
  );
}

export default App;
