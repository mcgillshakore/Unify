import React from 'react';

function SignupForm (props) {
    return(
        <div>
            <h1>Signup Form</h1>
            <div>
                <form>
                    <input name="fullname" type='text' placeholder="Enter Your Full Name..."></input>
                    <br/>
                    <br/>
                    <input name="username" type='text' placeholder="Create Username..."></input>
                    <br/>
                    <br/>
                    <input name="password" type='text' placeholder="Create Password..."></input>
                    <br/>
                    <br/>
                    <input name="avatar" type='text' placeholder="Insert Image URL..."></input>
                    <br/>
                    <br/>
                    <input type='submit' value='Create Account'></input>
                </form>
            </div>
        </div>
    )
}
export default SignupForm