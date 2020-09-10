import React, {useEffect} from 'react';
import { useParams } from 'react-router'
import MemberCard from './MemberCard';
import { useDispatch, useSelector } from 'react-redux';

const MemberCollection = (props) => {
    let params = useParams()
    let dispatch = useDispatch()
    // let history = useHistory()
    let group = useSelector(state => state.group)
   
   
        // console.log(`There's ${count} members`);
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
            dispatch({type: "GET_MEMBERS", members:groups.users, num_of_members:groups.users.length})
        })
    },[dispatch, params.slug])

    let becomeMember = () => {
        fetch("http://localhost:3000/members",{
            credentials: "include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                user_id: props.currentUser.id,
                group_id: group.id
            })

        }).then(resp => resp.json())
        .then(member => {
            console.log(member);
            dispatch({type: "INCREMENT_MEMBERS"})
            dispatch({type: "ADD_MEMBER", members: member.user})
        })
    }
    let num_of_members = useSelector(state => state.num_of_members)
    let allMembers = useSelector(state => state.members)
        
    return(
        <div className="member-container">
            <h2>Members</h2>
            <br></br>
            <p><strong>Current Members:</strong> {num_of_members}</p>
            <br/>
            <button className="member-btn" onClick={()=>becomeMember()}><i class="fas fa-users"></i> Become A Member</button>
            <br/>
            <br/>
             {allMembers.map(member => <MemberCard key={member.id} member={member}/>)}
        </div>
    )
}

export default MemberCollection