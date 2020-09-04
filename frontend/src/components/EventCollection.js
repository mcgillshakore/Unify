import React, {useEffect} from 'react';
import { useParams } from 'react-router'
import EventCard from './EventCard';
import { useDispatch, useSelector } from 'react-redux';

const EventCollection = () => {
    let params = useParams()
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
             {allEvents.map(event => <EventCard key={event.id} event={event}/>)}
        </div>
    )
}

export default EventCollection