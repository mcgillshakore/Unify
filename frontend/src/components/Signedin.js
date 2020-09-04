import React from 'react';
// import { useState, useEffect } from 'react';
import {useHistory} from 'react-router'
import UserGroups from './UserGroups'

function Signedin (props) {

    let history = useHistory()
    let deleteUser = () => {

        fetch(`http://localhost:3000/users/${props.currentUser.id}`,{
            method: 'DELETE'
        }).then(history.push('/'))
    }

    let leaveGroup = () => {
        fetch(`http://localhost:3000/members}`,{
            method: 'DELETE'
        }).then(history.push('/signedin'))
    }
    

 return(
     <div>
         <div>
         <h1>Hello, {props.currentUser.full_name}</h1>
         <button onClick={() =>history.push('/group-form')}>Create A Group</button><span> </span>
         <button onClick={()=> deleteUser()}>Delete Account</button><span> </span>
         <button onClick={()=> props.signout()}>Sign Out</button>
         </div>
         <br/>
         <div className="user-img">
            <img style={{width: "150px"}} src={props.currentUser.avatar} alt={props.currentUser.full_name}/><br/>
            <button onClick={()=>history.push(`/upload-photo/${props.currentUser.id}`)}>Upload New Photo</button>
         </div>
         <div className="user-info">
             <h3>Full Name: {props.currentUser.full_name}</h3>
             <h3>Username: {props.currentUser.username}</h3>
            <h3>Bio: {props.currentUser.bio}</h3>
            <button onClick={()=>history.push(`/edit-account/${props.currentUser.id}`)}>Edit Account's Info</button><span> </span>
            <button onClick={()=>console.log('Change Password')}>Change Password</button><span> </span>
         </div>
         <UserGroups currentUser={props.currentUser}/>
     </div>
 )
}


export default Signedin;