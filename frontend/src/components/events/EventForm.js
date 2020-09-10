import React from 'react';
import {useParams} from 'react-router'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';


const EventForm = () => {
    let history = useHistory()
    let params = useParams()
    let dispatch = useDispatch()
    // console.log(params.id);
   
    let createEvent = (e) => {
        e.preventDefault()
        console.log(e.target.time.value);
        fetch('http://localhost:3000/events', {
            credentials: "include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                group_id: params.id,
                location_id:e.target.location.value,
                name:e.target.name.value,
                date: e.target.time.value,
                photo:e.target.photo.value,
                description:e.target.description.value,
            })
        }).then(resp => resp.json())
        .then(event => {
            dispatch({type: "ADD_EVENT", events: event})
            history.goBack()
        })
    }

    let cancel = () => {
        history.goBack()
    }
    return(
        <div className="create-event-form">
            <h1>Create A Event</h1>
            <form onSubmit={(e) => createEvent(e)}>
                <input className="event-input" name="name" type="text" placeholder="Enter Event Name..."></input><br/><br/>
                <select className="event-input" name="location" type="text">
                    <option>------------</option>
                    <option value="1">Memphis, TN</option>
                    <option value="2">Houston, TX</option>
                    <option value="3">Buffalo, NY</option>
                    <option value="4">San Francisco, CA</option>
                </select><br/><br/>
                <div>
                <input className="event-input" type="datetime-local" name="time"
                    min="2020-01-01T00:00" max="2022-01-01T00:00"/>
                </div>
                <br/><br/>
                <input className="event-input" name="photo" type="text" placeholder="Enter Event Photo..."></input><br/><br/>
                <textarea className="event-input" name="description" type="text" placeholder="Enter Event Description..."></textarea><br/><br/>
                <input className="create-e-btn" type="submit" value="Create Event"></input> <button className="cancel-btn" onClick={()=>cancel()}>Cancel</button>
            </form>
           
        </div>
    )
} 

export default EventForm