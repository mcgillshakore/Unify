import React from 'react';
// import { useState, useEffect } from 'react';

function Signedin (props) {


 return(
     <div>
         <h1>Hello, {props.currentUser.full_name}</h1>
         <button onClick={()=> props.signout()}>Sign Out</button>
     </div>
 )
}


export default Signedin;