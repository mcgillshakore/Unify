import React from 'react'
import {useHistory} from 'react-router'

const EditPhoto = (props) => {
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
                avatar:e.target.avatar.value,
            })
        }).then(resp => resp.json()).then(history.push('/signedin'))
    }

    return(
        <div>
            <h1>Upload New Avatar</h1>
            <p>{props.currentUser.full_name}</p>

            <div>
                <form onSubmit={(e)=> editUser(e)}>
                    <input name="avatar" type='text' placeholder='Edit Image....'></input>
                    <br/><br/>
                    <input type='submit' value='Upload Photo'></input>
                </form>
            </div>
        </div>
    )
}

export default EditPhoto