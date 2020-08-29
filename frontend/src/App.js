import React, { useState, useEffect } from 'react';
import Signin from './components/Signin';
import Signedin from './components/Signedin'
import Home from './components/Home';
import Nav from './components/Nav';
import { Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <div>
          <Nav/>
        </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path ='/login' component= { () => <Login setUser = {setUser} currentUser = {currentUser}/> }/>
            <Route exact path ='/loggedin' component={ () => <Loggedin currentUser = { currentUser } logout ={logout}/> }/>
          </Switch>
    </div>
  );
}

export default App;
