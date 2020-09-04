import React, { useState, useEffect } from 'react';
import Signin from './components/Signin';
import Signedin from './components/Signedin';
import SignupForm from './components/SignupForm';
import EditUser from './components/EditUser';
import EditPhoto from './components/EditPhoto';
import GroupForm from './components/GroupForm';
import Home from './components/Home';
import Nav from './components/Nav';
import GroupInfo from './components/GroupInfo'
import { Switch, Route} from 'react-router-dom';
import { useHistory } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux'
// import GroupCollection from './components/GroupCollection';



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
    .then(resp => resp.json())
    .then(user => {
      if(user.username){
        setUser(user)
      } else {
        history.push('/')
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
            <Route exact path ="/group-form" component ={GroupForm} />
            <Route exact path="/edit-account/:id" component={() => <EditUser currentUser = {currentUser} />}/>
            <Route exact path="/upload-photo/:id" component={() => <EditPhoto currentUser = {currentUser} />}/>
            <Route exact path ='/signin' component= { () => <Signin setUser = {setUser} currentUser = {currentUser}/> }/>
            <Route exact path ='/signedin' component={ () => <Signedin currentUser = { currentUser } signout = {signout}/> }/>
            <Route exact path ='/signup' component = {SignupForm}/>
            <Route exact path="/:slug" component={() => <GroupInfo currentUser = {currentUser} />}/>
          </Switch>
    </div>
  );
}

export default App;
