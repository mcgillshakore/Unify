import React from 'react'
import {useParams, useHistory} from 'react-router';
import { useDispatch } from 'react-redux';


const AddReview = (props) => {
    let history = useHistory();
    let params = useParams();
    let dispatch = useDispatch();
    // console.log(params.id);
    // console.log(props.currentUser.id);

    let addReview = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/reviews', {
            credentials: 'include',
            method: 'POST',
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify({
                user_id: props.currentUser.id,
                group_id: params.id,
                description: e.target.content.value
            })
        }).then(resp => resp.json())
        .then(review => {
            dispatch({type: "ADD_REVIEW", reviews: review})
            history.goBack()
        })
    }
    let cancel = () => {
        history.goBack()
    }
   
    return(
        <div className="review-form">
                <h1>Add Review</h1>
            <div>
                <form onSubmit={(e) => addReview(e)}>
                    <textarea className="review-input" name="content" type="text" placeholder="Add Content..."/>
                    <br/>
                    <br/>
                    <input className="create-review-btn" type="submit" value="Add Review"/> <button className="cancel-btn" onClick={()=>cancel()}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default AddReview