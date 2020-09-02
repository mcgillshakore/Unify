import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'


const GroupInfo = () => {
    let params = useParams()
    console.log(params.slug);
    let dispatch = useDispatch();
    let group = useSelector(state => state.group)
    console.log(group);
   
    

    function loadGroup(){
        fetch(`http://localhost:3000/group-info`,{
            credentials:"include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({slug: params.slug})
            
        })
        .then(resp => resp.json())
        .then(group => {
            console.log(group)
            dispatch({type: "SHOW_GROUP", group: group})
        })
    }
    

    useEffect( () => {
       loadGroup()
    },[])

    return(
        <div>
            <h1>{group.name}</h1>
            <div>
                Location: {group.location}
            </div>
            <br/>
            <div>
                <img style={{width: '200px'}} src={group.photo} alt={group.name}/>
            </div>
            <br/>
            <div>
                About: {group.description}
                <br/>
                Members: {group.num_of_members}
            </div>
            
        </div>
    )
}

export default GroupInfo