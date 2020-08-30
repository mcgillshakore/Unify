import React, { useState, useEffect } from 'react';
import Signin from './components/Signin';
import Signedin from './components/Signedin';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import Nav from './components/Nav';
import { Switch, Route} from 'react-router-dom';
import { useHistory } from 'react-router';


function App() {
  let [currentUser, setUser] = useState({});
  let history = useHistory();

  let signout = () => {
    fetch('http://localhost:3000/signout',{
    credentials: 'include',
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      setUser({})
      history.push('/')
    })
  }

  useEffect(() => {
    fetch('http://localhost:3000/check-signin', {
      credentials: 'include',
    })
    .then(res => res.json())
    .then(user => {
      if(user.username){
        setUser(user)
        history.push('/signedin')
      } else {
        history.push('/signin')
      }
    })
  },[history])

  return (
    <div className="App">
        <div>
          <Nav/>
        </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path ='/signin' component= { () => <Signin setUser = {setUser} currentUser = {currentUser}/> }/>
            <Route exact path ='/signedin' component={ () => <Signedin currentUser = { currentUser } signout = {signout}/> }/>
            <Route exact path ='/signup' component = {SignupForm}/>
          </Switch>
    </div>
  );
}

export default App;
