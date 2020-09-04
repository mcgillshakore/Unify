import React from 'react';

const PhotoCard = (props) =>{
    return(
        <div>
            <div>
                <p>{props.photo.title}</p>
                <img src={props.photo.img_url} alt={props.photo.title}/>
            </div>
        </div>
    )
}

export default PhotoCard