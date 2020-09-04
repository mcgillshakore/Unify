import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router'
import MemberCollection from './MemberCollection'
import EventCollection from './EventCollection'
import PhotoCollection from './PhotoCollection'
import ReviewCollection from './ReviewCollection'


const GroupInfo = (props) => {
    // console.log(props.currentUser.id);
    let params = useParams()
    // console.log(params.slug);
    let dispatch = useDispatch();
    let group = useSelector(state => state.group)
    // console.log(group.slug);
    let history = useHistory()

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

    let becomeMember = () => {
        console.log("I'm a member");
        fetch("http://localhost:3000/members",{
            credentials: "include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                user_id: props.currentUser.id,
                group_id: group.id
            })

        }).then(resp => resp.json())
        .then(history.push(`/${group.slug}`))
        // history.push(`/${group.slug}`
    }

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
                Members: {group.members}
                <br/>
                About: {group.description}
            </div>
            <br/>
            <br/>
            <button onClick={()=>becomeMember()}>Become A Member</button>

            <MemberCollection/>
            <EventCollection/>
            <PhotoCollection/>
            <ReviewCollection/>
            
        </div>
    )
}

export default GroupInfo