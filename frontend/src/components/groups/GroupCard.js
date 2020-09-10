import React from 'react';
import { useHistory } from 'react-router';

// import GroupInfo from './GroupInfo'

const GroupCard = (props) => {
    let history = useHistory()
    return(
    <div className="group-card" onClick={() => history.push(`/${props.group.slug}`)}>
            <img className="group-img" src={props.group.photo} alt="img"/>
            <h1 className="group-name">{props.group.name}</h1>
    </div>
    )
}

export default GroupCard