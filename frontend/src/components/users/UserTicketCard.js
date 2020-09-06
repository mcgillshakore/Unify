import React from 'react';
import dateFormat from 'dateformat'

const UserTicketCard = (props) => {
    let date = dateFormat(props.ticket.date, "dddd, mmmm dS, yyyy")
    let time = dateFormat(props.ticket.date, "h:MM:ss TT")
    return(
        <div>
            <h3>{props.ticket.event}</h3>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
        </div>
    )
}

export default UserTicketCard