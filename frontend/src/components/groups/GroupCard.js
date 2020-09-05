import React from 'react';
import { useHistory } from 'react-router';

// import GroupInfo from './GroupInfo'

const GroupCard = (props) => {
    let history = useHistory()
    return(
        <div>
            <h2>{props.group.name}</h2>
            <div onClick={() => history.push(`/${props.group.slug}`)}>
                <img style={{width: '300px'}} className="group-photo" src={props.group.photo} alt="img"/>
            </div>
        </div>
    )
}

export default GroupCard