import React from 'react';

const PhotoCard = (props) =>{
    return(
        <div>
            <div>
                <img style={{width: '150px'}} src={props.photo.img_url} alt={props.photo.title}/>
                <p>{props.photo.title}</p>
            </div>
        </div>
    )
}

export default PhotoCard