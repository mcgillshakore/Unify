import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const Nav = (props) => {
    let dispatch = useDispatch()
    // console.log(props.currentUser)
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
    let loggedin = useSelector(state => state.loggedIn)
    console.log(user);

   function isLoggedIn(){
        return loggedin
    }
    
    return isLoggedIn() ? ( 
         <div>
             <Link className="Unify" to="/">Unify</Link>
            <div className="dropdown">
                <button className="menu-btn"><span>  </span><img className="user-avatar" src={user.avatar} alt={user.full_name}/></button>
                <div className="dropdown-content">
                    <Link className="user-profile" to="/signedin">View Account</Link>
                </div>
            </div>
        </div>
 ) : (
    <div>
        <Link className="Unify" to="/">Unify</Link>
        <div className="nav-2">
        <Link className="link"  to="/signin">Log in</Link>
            <span> / </span>
        <Link className="link" to="/signup">Signup</Link>
            <span> </span>
        </div>
    </div>
    )
}

export default Nav;