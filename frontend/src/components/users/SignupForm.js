import React from 'react'
import { useHistory } from 'react-router';


function SignupForm (props) {
    let history = useHistory();

    let createUser = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user:{
                    full_name: e.target.fullname.value,
                    username: e.target.username.value,
                    password: e.target.password.value,
                    avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                }
            })
        }).then(resp => resp.json()).then(history.push('/signin'))
    }
    return(
        <div className="signup-form">
            <h1>Join Us !</h1>
            <div>
                <form onSubmit={ (e) => createUser(e)}>
                <i class="far fa-user"></i> <input className="signup-i" name="fullname" type='text' placeholder="Enter Your Full Name..."></input>
                    <br/>
                    <br/>
                    <i class="far fa-user-circle"></i> <input className="signup-i"  name="username" type='text' placeholder="Create Username..."></input>
                    <br/>
                    <br/>
                    <i class="fas fa-key"></i> <input className="signup-i"  name="password" type='text' placeholder="Create Password..."></input>
                    <br/>
                    <br/>
                    <input className="signup-btn" type='submit' value='Create Account'></input>
                </form>
            </div>
        </div>
    )
}
export default SignupForm