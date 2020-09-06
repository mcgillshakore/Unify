import React from 'react';

const PhotoCard = (props) =>{
    return(
        <div>
            <div>
                <p>{props.photo.title}</p>
                <img style={{width: '200px'}} src={props.photo.img_url} alt={props.photo.title}/>
                <p>Photo by: {props.photo.user}</p>
            </div>
        </div>
    )
}

export default PhotoCard