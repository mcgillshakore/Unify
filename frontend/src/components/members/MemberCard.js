import React from 'react';

const MemberCard = (props) =>{
    return(
        <div>
            <div>
                <img style={{width: "50px"}} src={props.member.avatar} alt={props.member.full_name}/>
                <p>{props.member.full_name}</p>
            </div>
        </div>
    )
}

export default MemberCard