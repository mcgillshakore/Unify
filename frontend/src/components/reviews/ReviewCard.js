import React from 'react';

const ReviewCard = (props) =>{
    console.log(props.review)
    return(
        <div>
            <div>
                <p><strong>{props.review.description}</strong> ~ <em>{props.review.username}</em></p>
            </div>
        </div>
    )
}

export default ReviewCard