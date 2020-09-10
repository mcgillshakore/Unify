import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const GroupForm = () => {
    let history = useHistory()
    let dispatch = useDispatch()
    let createGroup = (e) => {
        e.preventDefault()
    
        fetch('http://localhost:3000/groups', {
            credentials: "include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                location_id:e.target.location.value,
                name:e.target.name.value,
                photo:e.target.photo.value,
                description:e.target.description.value,
            })
        }).then(resp => resp.json())
        .then(group => {
            dispatch({type: "ADD_GROUP", groups: group})
            history.push('/')
        })
    }
    return(
        <div className="create-group-form">
            <h1>Create A Group</h1>
            <form onSubmit={(e) => createGroup(e)}>
                <input className="group-input" name="name" type="text" placeholder="Enter Group Name..."></input><br/><br/>
                <select className="group-input" name="location" type="text">
                    <option>------------</option>
                    <option value="1">Memphis, TN</option>
                    <option value="2">Houston, TX</option>
                    <option value="3">Buffalo, NY</option>
                    <option value="4">San Francisco, CA</option>
                </select><br/><br/>
                <input className="group-input" name="photo" type="text" placeholder="Enter Group Photo..."></input><br/><br/>
                <textarea className="group-input" name="description" type="text" placeholder="Enter Group Description..."></textarea><br/><br/>
                <input className="create-g-btn" type="submit" value="Create Group"></input>
            </form>
        </div>
    )
} 

export default GroupForm