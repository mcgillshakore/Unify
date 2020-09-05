import React, {useEffect} from 'react';
import { useParams } from 'react-router'
import MemberCard from './MemberCard';
import { useDispatch, useSelector } from 'react-redux';

const MemberCollection = (props) => {
    let params = useParams()
    let dispatch = useDispatch()
    let allMembers = useSelector(state => state.members)
        // console.log(allMembers, "I'm allMember");
    useEffect( () => {
        fetch(`http://localhost:3000/group-info`,{
            credentials:"include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({slug: params.slug})
        })
        .then(resp => resp.json())
        .then(groups => {
            // console.log(groups.users, "fetchGroups");
            dispatch({type: "GET_MEMBERS", members:groups.users})
        })
    },[dispatch, params.slug])
        
    return(
        <div>
            <h2>Members</h2>
             {allMembers.map(member => <MemberCard key={member.id} member={member}/>)}
        </div>
    )
}

export default MemberCollection