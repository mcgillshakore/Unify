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
        <div>
            <h1>{group.name}</h1>
            <div>
                Location: {group.location}
            </div>
            <br/>
            <div>
                <img style={{width: '300px'}} src={group.photo} alt={group.name}/>
            </div>
            <br/>
            <div>
                
                Description: {group.description}
            </div>
            <br/>
            <br/>
           
        <div>
            <MemberCollection currentUser={props.currentUser}/>
        </div>
        <div>
            <EventCollection group={group} currentUser={props.currentUser}/>
        </div>
        <div>
            <PhotoCollection group={group}/>
        </div>
        <div>
            <ReviewCollection group={group}/>
        </div>
        </div>
    )
}

export default GroupInfo