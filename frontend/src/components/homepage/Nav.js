import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Nav = (props) => {
    // console.log(props.currentUser)
    // let user = props.currentUser
    let loggedin = useSelector(state => state.loggedIn)

   function isLoggedIn(){
        return loggedin
    }
    
    // let loggedin = useSelector(state => state.loggedIn)
    // console.log(loggedin);

    return isLoggedIn() ? ( 
         <div className="nav-bar">
            <Link to="/">Home</Link>
            <span> </span>
            <Link to="/signin">Signin</Link>
            <span> </span>
            <Link to="/signup">Signup</Link>
            <span> </span>
            <Link to="/signedin">View Profile</Link>
            <span> </span>
        </div>
 ) : (
        <div className="nav-bar">
           <Link to="/">Home</Link>
           <span> </span>
           <Link to="/signin">Signin</Link>
           <span> </span>
           <Link to="/signup">Signup</Link>
           <span> </span>
           {/* <Link  to="/signedin">View Profile</Link>
            <span> </span> */}
        </div>
    )
}

export default Nav;