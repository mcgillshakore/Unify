import React from 'react';
import dateFormat from 'dateformat'
import {useHistory} from 'react-router'
import { useDispatch } from 'react-redux'

const EventCard = (props) =>{
    let date = dateFormat(props.event.date, "dddd, mmmm dS, yyyy")
    let time = dateFormat(props.event.date, "h:MM:ss TT")
    let history = useHistory()
    let dispatch = useDispatch()
    let attendEvent = () => {
        fetch('http://localhost:3000/tickets', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: props.currentUser.id,
                event_id: props.event.id
            })
        }).then(resp => resp.json())
        .then(ticket => {
            dispatch({type: "ADD_TICKET", usertickets: ticket})
            history.push('/signedin')
        })
    }
    return(
        <div className="event-card">
            <div className="event-name">
            <h3>{props.event.name}</h3>
            </div>
            <br></br>
            <div className="event-img">
            <img src={props.event.photo} alt={props.event.name}/>
            </div>
            <br></br>
            <div className="event-info">
            <p><strong>Description: </strong>{props.event.description}</p>
            <p><strong>Location:</strong> {props.event.location.city}, {props.event.location.state}</p>
            <p><strong>Date:</strong> {date} </p>
            <p><strong>Time:</strong> {time} </p>
            </div>
            <br></br>
            <button className="attend-btn" onClick={()=>attendEvent()}>
            Attend <i class="fas fa-concierge-bell"></i> 
            </button>
        </div>
    )
}

export default EventCard