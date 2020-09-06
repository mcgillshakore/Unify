import React from 'react';
import { useHistory } from 'react-router';

const UserGroupCard = (props) =>{
    let history = useHistory()
    return(
        <div>
            <div>
                <p>{props.group.name}</p>
                <button onClick={()=>history.push(`/delete-group/${props.group.id}`)}>Leave Group</button>
            </div>
        </div>
    )
}

export default UserGroupCard