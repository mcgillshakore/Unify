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
                username:e.target.username.value,
                bio:e.target.bio.value
            })
        }).then(resp => resp.json()).then(history.push('/signedin'))
    }

    return(
        <div className="edit-form">
            <h1>Edit Your Account</h1>
            <div>
                <form onSubmit={(e)=> editUser(e)}>
                    <input className="edit-input" name="username" type='text' placeholder='Edit Username...'></input>
                    <br/><br/>
                    <textarea className="edit-input" name="bio" type='text' placeholder='Edit Bio....'></textarea>
                    <br/><br/>
                    <input className="edit-user-btn" type='submit' value='Edit Account'></input>
                </form>
            </div>
        </div>
    )
}

export default EditUser