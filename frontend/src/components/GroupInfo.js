import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'


const GroupInfo = () => {
    let params = useParams()
    // console.log(params.slug);
    let dispatch = useDispatch();
    let group = useSelector(state => state.group)
    useEffect( () => {
        fetch(`http://localhost:3000/group-info`,{
            credentials:"include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({slug: params.slug})
            
        })
        .then(resp => resp.json())
        .then(group => {
            dispatch({type: "SHOW_GROUP", group:group.data.attributes})
        })
    },[])

    return(
        <div>
            <h1>{group.name}</h1>
            <div>
                <img style={{width: '200px'}} src={group.photo} alt={group.name}/>
            </div>
            
        </div>
    )
}

export default GroupInfo