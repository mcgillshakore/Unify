import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

function Signin(props) {

    let history = useHistory();
    let dispatch = useDispatch();

    let signin = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/signin',{
            credentials: 'include',
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                username:e.target.username.value,
                password:e.target.password.value
            })
        }).then(resp => resp.json())
          .then(user => {
            //   console.log(user);
              if(user.username){
                  props.setUser(user)
                  dispatch({type: 'LOGIN', loggedIn: true})
                  history.push('/signedin')
              }else{
                  console.log('Not logged In');
              }
          })
    }

 return(
     <div className="login-form">
         <h1>Log In</h1>
         <div>
             <form onSubmit={ (e) => signin(e)}>
             <i class="far fa-user"></i> <input className="signup-input" name='username' type='text' placeholder='Enter Username...'></input>
                <br/>
                <br/>
             <i class="fas fa-key"></i> <input className="signup-input" name='password' type='password' placeholder='Enter Password...'></input>
                <br/>
                <br/>
                <input className="signup-btn" type='submit' value='Log In'></input>
             </form>
         </div>
     </div>
 )
}


export default Signin;