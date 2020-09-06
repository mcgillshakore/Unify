import React from 'react';
import {useParams, useHistory} from 'react-router';

const AddPhoto = (props) => {
    let history = useHistory();
    let params = useParams();
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
        .then(history.goBack())
    }
    return(
        <div>
            <div>
                <h1>Add Photo</h1>
            </div>
            <div>
            <form onSubmit={(e) => addPhoto(e)}>
                    <input name="title" type="text" placeholder="Add Title..."/>
                    <br/>
                    <br/>
                    <input name="photo" type="text" placeholder="Add Image URL..."/>
                    <br/>
                    <br/>
                    <input type="submit" value="Add Photo"/>
                </form>
            </div>
        </div>
    )
}

export default AddPhoto