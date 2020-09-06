import React from 'react';
import dateFormat from 'dateformat'
import {useHistory} from 'react-router'

const EventCard = (props) =>{
    let date = dateFormat(props.event.date, "dddd, mmmm dS, yyyy")
    let time = dateFormat(props.event.date, "h:MM:ss TT")
    let history = useHistory()
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
        .then(history.push('/signedin'))
    }
    return(
        <div className="event-card">
            <div className="event-name">
            <h3>{props.event.name}</h3>
            </div>
            <div className="event-img">
            <img style={{width: "150px"}} src={props.event.photo} alt={props.event.name}/>
            </div>
            <div className="event-info">
            <p><strong>Date:</strong> {date} </p>
            <p><strong>Time:</strong> {time} </p>
            <p><strong>Location:</strong> {props.event.location.city}, {props.event.location.state}</p>
            <p><strong>Description: </strong>{props.event.description}</p>
            </div>
            <button className="attend-btn" onClick={()=>attendEvent()}>
                Attend
            </button>
        </div>
    )
}

export default EventCard