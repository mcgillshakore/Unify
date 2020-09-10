import React from 'react';

const PhotoCard = (props) =>{
    return(
        <div className="photo-card">
            <img style={{width: '200px'}} src={props.photo.img_url} alt={props.photo.title}/>
            <p>{props.photo.title}</p>
        </div>
    )
}

export default PhotoCard