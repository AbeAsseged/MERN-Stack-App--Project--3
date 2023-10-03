//W14D2 notes and day 

import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'


function NavBar(props) {

  const handleLogOut = () => {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    props.setUser(null);
  }

  return (
    <nav>
      <h1>Welcome, {props.user.name}</h1>
      {/* <Link to="/orders">Event History</Link> */}
      &nbsp; | {" "}
      <Link to="/events/new">Host Event</Link>
      <br />
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

export default NavBar








// W14D1
// import { Link } from 'react-router-dom';

// function NavBar() {
//   return (
//     <nav>
//       <Link to="/orders">Order History</Link>
//       &nbsp; | {" "} 
//       <Link to="/orders/new">New Order</Link>
//     </nav>
//   )
// }

// export default NavBar