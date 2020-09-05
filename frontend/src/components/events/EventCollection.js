import React, {useEffect} from 'react';
import { useParams, useHistory } from 'react-router'
import EventCard from './EventCard';
import { useDispatch, useSelector } from 'react-redux';

const EventCollection = (props) => {
    let params = useParams()
    let history = useHistory()
    let dispatch = useDispatch()
    let allEvents = useSelector(state => state.events)
        // console.log(allEvents, "I'm all Events");
    useEffect( () => {
        fetch(`http://localhost:3000/group-info`,{
            credentials:"include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({slug: params.slug})
        })
        .then(resp => resp.json())
        .then(groups => {
            // console.log(groups, "fetchGroups");
            dispatch({type: "GET_EVENTS", events:groups.events})
        })
    },[dispatch, params.slug])
        
    return(
        <div>
            <h2>Events</h2>
            <button onClick={()=>history.push(`/group/${props.group.id}/event-form`)}>Create Event</button>
             {allEvents.map(event => <EventCard key={event.id} event={event}/>)}
        </div>
    )
}

export default EventCollection