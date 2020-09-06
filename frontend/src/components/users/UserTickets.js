import React, {useEffect}  from 'react';
import UserTicketCard from './UserTicketCard';
import { useDispatch, useSelector } from 'react-redux';

const UserTickets = (props) => {

    let dispatch = useDispatch()

    useEffect( () => {
        fetch(`http://localhost:3000/user-info`,{
            credentials:"include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: props.currentUser.id})
        })
        .then(resp => resp.json())
        .then(users => {
            // console.log(users.tickets);
            if(users!== null && users.username === props.currentUser.username){
                dispatch({type: "GET_USERTICKETS", usertickets: users.tickets})
            }
        })
    },[dispatch, props.currentUser.id, props.currentUser.username])
        
    let allUserTickets = useSelector(state => state.usertickets)
    // console.log(allUserTickets);

    return(
        <div>
            <h2>Tickets</h2>
            {allUserTickets.map(userTicket => <UserTicketCard key={userTicket.id} ticket={userTicket}/>)}
        </div>
    )

}

export default UserTickets