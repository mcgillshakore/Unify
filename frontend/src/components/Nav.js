import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <div className="nav-bar">
            <Link to="/">Home</Link>
           <span> </span>
        </div>
    )
}

export default Nav;