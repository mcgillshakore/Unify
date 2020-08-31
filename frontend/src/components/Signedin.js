import React from 'react';
// import { useState, useEffect } from 'react';
import {useHistory} from 'react-router'

function Signedin (props) {

    let history = useHistory()
    let deleteUser = () => {

        fetch(`http://localhost:3000/users/${props.currentUser.id}`,{
            method: 'DELETE'
        }).then(history.push('/'))
    }

 return(
     <div>
         <h1>Hello, {props.currentUser.full_name}</h1>
         <div className="user-img">

         </div>
         <div className="user-info">
             <h3>Full Name: {props.currentUser.full_name}</h3>
             <h3>Username: {props.currentUser.username}</h3>
             <h3>Bio: </h3>
         </div>
         <button onClick={()=>history.push(`/edit-account/${props.currentUser.id}`)}>Edit Account's Info</button><span> </span>
         <button onClick={()=>console.log('Change Password')}>Change Password</button><span> </span>
         <button onClick={()=> deleteUser()}>Delete Account</button><span> </span>
         <button onClick={()=> props.signout()}>Sign Out</button>
     </div>
 )
}


export default Signedin;