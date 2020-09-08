import React, {useEffect} from 'react';
import UserGroupCard from './UserGroupCard';
import { useDispatch, useSelector } from 'react-redux';

const UserGroups = (props) => {

    let dispatch = useDispatch()

    useEffect( () => {
        fetch(`http://localhost:3000/user-info`,{
            credentials:"include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: props.currentUser.id})
        })
        .then(resp => resp.json())
        .then(users => {
            if(users!== null && users.username === props.currentUser.username){
                dispatch({type: "GET_USERGROUPS", usergroups: users.groups})
            }
        })
    },[dispatch, props.currentUser.id, props.currentUser.username])
        
    let allUserGroups = useSelector(state => state.usergroups);
    

    return(
        <div>
            <h2>Groups</h2>
             {allUserGroups.map(userGroup => <UserGroupCard key={userGroup.id} group={userGroup}/>)}
        </div>
    )
}

export default UserGroups