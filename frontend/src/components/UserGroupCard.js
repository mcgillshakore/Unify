import React from 'react';

const UserGroupCard = (props) =>{
    return(
        <div>
            <div>
                <p>{props.group.name}</p>
                <button>Leave Group</button>
            </div>
        </div>
    )
}

export default UserGroupCard