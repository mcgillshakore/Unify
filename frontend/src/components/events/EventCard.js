import React from 'react';
import dateFormat from 'dateformat'

const EventCard = (props) =>{
    let date = dateFormat(props.event.date, "dddd, mmmm dS, yyyy")
    let time = dateFormat(props.event.date, "h:MM:ss TT")
    return(
        <div className="event-card">
            <div className="event-name">
            <h3>{props.event.name}</h3>
            </div>
            <div className="event-info">
            <p><strong>Date:</strong> {date} </p>
            <p><strong>Time:</strong> {time} </p>
            <p><strong>Location:</strong> {props.event.location.city}, {props.event.location.state}</p>
            <p><strong>Description: </strong>{props.event.description}</p>
            </div>
            <div className="event-img">
            <img style={{width: "150px"}} src={props.event.photo} alt={props.event.name}/>
            </div>
            <button className="attend-btn">
                Attend
            </button>
        </div>
    )
}

export default EventCard