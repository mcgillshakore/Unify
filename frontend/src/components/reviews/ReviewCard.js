import React from 'react';

const ReviewCard = (props) =>{
    // console.log(props.review)
    return(
        <div className="review-card">
            <p><strong>{props.review.description}</strong> ~ <em>{props.review.username}</em></p>
        </div>
    )
}

export default ReviewCard