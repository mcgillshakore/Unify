import React from 'react';

const MemberCard = (props) =>{
    return(
        <div>
            <div>
                <p>{props.member.full_name}</p>
                <img style={{width: "50px"}} src={props.member.avatar} alt={props.member.full_name}/>
            </div>
        </div>
    )
}

export default MemberCard