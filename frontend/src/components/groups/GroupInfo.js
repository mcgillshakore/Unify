import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
// import { useHistory } from 'react-router'
import MemberCollection from '../members/MemberCollection'
import EventCollection from '../events/EventCollection'
import PhotoCollection from '../photos/PhotoCollection'
import ReviewCollection from '../reviews/ReviewCollection'


const GroupInfo = (props) => {
    // console.log(props.currentUser.id);
    let params = useParams()
    // console.log(params.slug);
    let dispatch = useDispatch();
    
    // console.log(group.slug);
    let group = useSelector(state => state.group)

    useEffect( () => {
        fetch(`http://localhost:3000/group-info`,{
            credentials:"include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({slug: params.slug})
            
        })
        .then(resp => resp.json())
        .then(group => {
            // console.log(group)
            dispatch({type: "SHOW_GROUP", group: group})
        })
    },[dispatch, params.slug])

    return(
    <div className="group-info-card"> 
        <section className="group-info">
            <div className="group-photo">
                <img src={group.photo} alt={group.name}/>
            </div>
            <div className="group-desc">
                <h1>{group.name}</h1>
                <br/>
                <h3><i class="fas fa-map-marker-alt"></i> {group.location}</h3>
                <br/>
                    <p><strong>About:</strong> {group.description}</p>
                <br/>
            </div>
        </section>
        <div className='members'>
            <MemberCollection currentUser={props.currentUser}/>
        </div>
        <div className='events'>
            <EventCollection group={group} currentUser={props.currentUser}/>
        </div>
        <div className='photos'>
            <PhotoCollection group={group}/>
        </div>
        <div className='reviews'>
            <ReviewCollection group={group}/>
        </div>
    </div>
    )
}

export default GroupInfo