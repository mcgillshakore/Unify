import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

const LeaveGroup = (props) => {
    let history = useHistory()
    let params = useParams()
    let dispatch = useDispatch()
    console.log(params.id);
    
    useEffect(()=>{
        fetch('http://localhost:3000/member-info',{
            // credentials:"include",
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: props.currentUser.id,
                group_id: params.id
            })
        }).then(resp => resp.json())
        .then(member => {
            if(member!== null && member.user_id === props.currentUser.id){
                    dispatch({type: "GET_GROUPMEMBER", groupmember: member})
                }
        })
    },[dispatch, props.currentUser.id, params.id])

    let groupMember_id = useSelector(state => state.groupmember.id)

        let allUserGroups = useSelector(state => state.usergroups);
        console.log(allUserGroups);

    let leaveGroup = () => {
        fetch(`http://localhost:3000/members/${groupMember_id}}`,{
            method: 'DELETE'
        }).then( ()=> 
            // dispatch({type: "DELETE_USERGROUPS", usergroups: allUserGroups.filter( usergroup => usergroup.id !== params.id) }),
            history.push('/')
            // state.usergroups.filter(usergroup => usergroup.id !== action.usergroup)
            )
    }

    let dontLeaveGroup = () => {
        console.log('Stay in Group');
        history.push('/signedin')
    }
    return(
        <div>
            <h1>Are you sure you want to leave this group?</h1>
            <button onClick={()=>leaveGroup()}>Yes</button> <button onClick={()=> dontLeaveGroup()}>No</button>
        </div>
    )
}

export default LeaveGroup