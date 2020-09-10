import React, {useEffect}  from 'react';
import {useHistory} from 'react-router';
import UserGroups from './UserGroups';
import UserTickets from './UserTickets';
import { useDispatch, useSelector } from 'react-redux';

function Signedin (props) {
// console.log(props.currentUser.avatar);
    let history = useHistory()
    let dispatch = useDispatch()
    let deleteUser = () => {

        fetch(`http://localhost:3000/users/${props.currentUser.id}`,{
            method: 'DELETE'
        }).then(history.push('/'))
    }

    useEffect( () => {
      fetch(`http://localhost:3000/user-info`,{
          credentials:"include",
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({id: props.currentUser.id})
      })
      .then(resp => resp.json())
      .then(user => {
         if(user!== null && user.username === props.currentUser.username){
            dispatch({type: "GET_AVATAR", avatar:user})
        }
      })
  },[dispatch, props.currentUser.id, props.currentUser.username])

let user = useSelector(state => state.avatar)
console.log(user.avatar)

 return(
     <div className="user-container">
         <div>
            <h1>Hello, {props.currentUser.full_name}</h1>
            <br></br>
            <button className="user-btn"onClick={() =>history.push('/group-form')}>Create A Group</button><span> </span>
            <button className="user-btn" onClick={()=> deleteUser()}>Delete Account</button><span> </span>
            <button className="user-btn" onClick={()=> props.signout()}>Sign Out</button>
         </div>
         <br/>
         <div className="user-img">
            <img className="avatar"src={user.avatar} alt={props.currentUser.full_name}/><br/>
            <button className="user-btn"  onClick={()=>history.push(`/upload-photo/${props.currentUser.id}`)}><i class="fas fa-camera"></i> Upload</button>
         </div>
         <br/>
         <div className="user-info">
            <h3><i class="far fa-user"></i> Username: {props.currentUser.username}</h3>
            <h3>Full Name: {props.currentUser.full_name}</h3>
            <h3>Bio: {user.bio}</h3>
            <br></br>
            <button className="user-btn" onClick={()=>history.push(`/edit-account/${props.currentUser.id}`)}>Edit Account's Info</button><span> </span>
            <button className="user-btn" onClick={()=>console.log('Change Password')}>Change Password</button><span> </span>
         </div>
         <div className="user-group">
            <UserGroups currentUser={props.currentUser}/>
         </div>
         <div className="user-ticket">
            <UserTickets currentUser={props.currentUser}/>
         </div>
     </div>
 )
}


export default Signedin;