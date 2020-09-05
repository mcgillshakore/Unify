import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
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
    )
}

export default Nav;