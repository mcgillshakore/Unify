import React from 'react'
import {useHistory} from 'react-router';


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
        <div>
            <h1>Signup Form</h1>
            <div>
                <form onSubmit={ (e) => createUser(e)}>
                    <input name="fullname" type='text' placeholder="Enter Your Full Name..."></input>
                    <br/>
                    <br/>
                    <input name="username" type='text' placeholder="Create Username..."></input>
                    <br/>
                    <br/>
                    <input name="password" type='text' placeholder="Create Password..."></input>
                    <br/>
                    <br/>
                    <input type='submit' value='Create Account'></input>
                </form>
            </div>
        </div>
    )
}
export default SignupForm