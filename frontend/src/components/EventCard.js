import React from 'react';

const EventCard = (props) =>{
    return(
        <div>
            <div>
                <h3>{props.event.name}</h3>
                <p><strong>Location:</strong> {props.event.location.city}, {props.event.location.state}</p>
                <p><strong>Description: </strong>{props.event.description}</p>
                <img style={{width: "150px"}} src={props.event.photo} alt={props.event.name}/>
            </div>
            <button>Attend</button>
        </div>
    )
}

export default EventCard