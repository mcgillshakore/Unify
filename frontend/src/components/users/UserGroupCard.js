import React from 'react';
import { useHistory } from 'react-router';

const UserGroupCard = (props) =>{
    let history = useHistory()
    return(
        <div>
            <div>
            <button className="user-group-btn" onClick={()=>history.push(`/delete-group/${props.group.id}`)}><i class="fas fa-users-slash"></i> {props.group.name} </button>
                {/* <button onClick={()=>history.push(`/delete-group/${props.group.id}`)}>X</button> */}
            </div>
        </div>
    )
}

export default UserGroupCard