import React from 'react';
import { useHistory } from 'react-router';

function Signin(props) {

    let history = useHistory();

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
                  history.push('/signedin')
              }else{
                  console.log('Not logged In');
              }
          })
    }

 return(
     <div>
         <h1>Signin Page</h1>
         <div>
             <form onSubmit={ (e) => signin(e)}>
                <input name='username' type='text' placeholder='Enter Username...'></input>
                <br/>
                <br/>
                <input name='password' type='password' placeholder='Enter Password...'></input>
                <br/>
                <br/>
                <input type='submit' value='Sign In'></input>
             </form>
         </div>
     </div>
 )
}


export default Signin;