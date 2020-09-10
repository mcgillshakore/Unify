import React, {useEffect} from 'react';
import { useParams } from 'react-router'
import PhotoCard from './PhotoCard';
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';

const PhotoCollection = (props) => {
    let params = useParams()
    let dispatch = useDispatch()
    let history = useHistory()
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
        <div className="photo-container">
            <h2>Photos</h2>
            <br/>
            <button  className="photo-btn" onClick={()=>history.push(`/group/${props.group.id}/add-photo`)}><i class="fas fa-camera"></i> Add Photo</button><br/><br/>
             {allPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
        </div>
    )
}

export default PhotoCollection