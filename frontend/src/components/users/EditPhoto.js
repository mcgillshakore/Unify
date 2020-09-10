import React from 'react'
import {useHistory} from 'react-router'
import { useDispatch } from 'react-redux';

const EditPhoto = (props) => {
    let history = useHistory()
    let dispatch = useDispatch()
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
        }).then(resp => resp.json()).then(user => {
            if(user!== null && user.username === props.currentUser.username){
                dispatch({type: "GET_AVATAR", avatar:user})
            }
            history.push('/signedin')
        })
    }

    return(
        <div className="edit-photo-form">
            <h1>Upload New Avatar</h1>
            <div>
                <form onSubmit={(e)=> editUser(e)}>
                    <input className="edit-photo-input" name="avatar" type='text' placeholder='Edit Image....'></input>
                    <br/><br/>
                    <input className="edit-photo-btn" type='submit' value='Upload Photo'></input>
                </form>
            </div>
        </div>
    )
}

export default EditPhoto