import React from 'react';
import {useParams, useHistory} from 'react-router';
import { useDispatch } from 'react-redux';

const AddPhoto = (props) => {
    let history = useHistory();
    let params = useParams();
    let dispatch = useDispatch();
    console.log(params.id);
    console.log(props.currentUser.id);

    let addPhoto = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/photos', {
            credentials: 'include',
            method: 'POST',
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify({
                user_id: props.currentUser.id,
                group_id: params.id,
                title: e.target.title.value,
                img_url: e.target.photo.value
            })
        }).then(resp => resp.json())
        .then(photo => {
            dispatch({type: "ADD_PHOTO", photos: photo})
            history.goBack()
        })
    }
    let cancel = () => {
        history.goBack()
    }
    return(
        <div className="photo-form" >
            <h1>Add Photo</h1>
            <div>
                <form onSubmit={(e) => addPhoto(e)}>
                    <input className="photo-input" name="title" type="text" placeholder="Add Title..."/>
                    <br/>
                    <br/>
                    <input className="photo-input" name="photo" type="text" placeholder="Add Image URL..."/>
                    <br/>
                    <br/>
                    <input className="create-p-btn" type="submit" value="Add Photo"/><button className="cancel-btn" onClick={()=>cancel()}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default AddPhoto