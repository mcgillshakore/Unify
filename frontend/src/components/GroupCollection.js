import React, { useEffect } from 'react';
import GroupCard from './GroupCard';
import { useDispatch, useSelector } from 'react-redux';

function GroupCollection(){
    let dispatch = useDispatch()
    let allGroups = useSelector(state => state.groups)
        // console.log(allGroups, "I'm allGroups");
    useEffect( () => {
        fetch('http://localhost:3000/groups',{
            credentials:"include"
        })
        .then(resp => resp.json())
        .then(fetchGroups => {
            // console.log(fetchGroups.data, "fetchGroups");
            dispatch({type: "GET_GROUPS", groups:fetchGroups.data})
        })
    },[dispatch])
        
    return(
        <div>
             {allGroups.map(group => <GroupCard key={group.id} group={group.attributes}/>)}
        </div>
    )
}


export default GroupCollection