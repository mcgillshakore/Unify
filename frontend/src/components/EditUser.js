import React from 'react'
import {useHistory} from 'react-router'

const EditUser = (props) => {
    let history = useHistory()
    let editUser = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3000/users/${props.currentUser.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                full_name:e.target.fullname.value,
                username:e.target.username.value
            })
        }).then(resp => resp.json()).then(history.push('/signedin'))
    }

    return(
        <div>
            <h1>Edit Your Account</h1>
            <p>{props.currentUser.full_name}</p>

            <div>
                <form onSubmit={(e)=> editUser(e)}>
                    <input name="fullname" type='text' placeholder='Edit Name...'></input>
                    <br/><br/>
                    <input name="username" type='text' placeholder='Edit Username...'></input>
                    <br/><br/>
                    <input type='submit' value='Edit Account'></input>
                </form>
            </div>
        </div>
    )
}

export default EditUser