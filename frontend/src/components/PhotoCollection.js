import React, {useEffect} from 'react';
import { useParams } from 'react-router'
import PhotoCard from './PhotoCard';
import { useDispatch, useSelector } from 'react-redux';

const PhotoCollection = (props) => {
    let params = useParams()
    let dispatch = useDispatch()
    let allPhotos = useSelector(state => state.photos)
        // console.log(allPhotos, "I'm all Photos");
    useEffect( () => {
        fetch(`http://localhost:3000/group-info`,{
            credentials:"include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({slug: params.slug})
        })
        .then(resp => resp.json())
        .then(groups => {
            // console.log(groups, "fetchGroups");
            dispatch({type: "GET_PHOTOS", photos:groups.photos})
        })
    },[dispatch, params.slug])
        
    return(
        <div>
            <h2>Photos</h2>
             {allPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
        </div>
    )
}

export default PhotoCollection