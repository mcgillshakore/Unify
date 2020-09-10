import React from 'react';

const MemberCard = (props) =>{
    return(
    <div className="member">
        <img src={props.member.avatar} alt={props.member.full_name}/>
        {/* <p>{props.member.full_name}</p> */}
    </div>
)
}

export default MemberCard