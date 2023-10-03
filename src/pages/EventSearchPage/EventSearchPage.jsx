//W14D3 part 6

// import { checkToken } from '../../utilities/users-service'
// import React, { useState } from 'react';


// function EventSearchPage() {

//   const handleCheckToken = async () => {
//     try {
//       const expDate = await checkToken()
//       alert(expDate.toLocaleString())
//     } catch (err) {
//       console.log(err)
//     }
//   };

//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     // Logic to handle searching for events
//     // Filter the events array based on the search query
//     const filteredEvents = events.filter((event) =>
//       event.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     // Perform any action with the filtered events
//     console.log(filteredEvents);

//   return (
//     <div>
//       <h1>EventSearchPage</h1>
//       <button onClick={handleCheckToken}>Check Log In Expiration</button>
  


// <h2>Search for Events</h2>
//       <input
//         type="text"
//         placeholder="Search Events"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   )
// }
// }





// export default EventSearchPage













// w14d1
// function OrderHistoryPage() {
//   return (
//     <div>OrderHistoryPage</div>
//   )
// }

// export default OrderHistoryPage