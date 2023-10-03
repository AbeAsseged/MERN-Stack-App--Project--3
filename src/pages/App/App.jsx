import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HostEventPage from "../HostEventPage/HostEventPage.jsx"
// import EventSearchPage from '../EventSearchPage/EventSearchPage.jsx'
import AuthPage from "../AuthPage/AuthPage.jsx"
import NavBar from "../../components/NavBar/NavBar"
import { getUser } from '../../utilities/users-service'


function App() {
  const [user, setUser] = useState(getUser())
 


  return (
    <main className="App">
      {
        user ?
          <>
            {/* NavBar and Routes are only available when the user is logged in */}
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/events/new" element={<HostEventPage />} />
              {/* <Route path="/events" element={<EventSearchPage />} /> */}
            </Routes>
          </>
        :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App






































//W13D3

// import './App.css'
// import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import NewOrderPage from '../NewOrderPage/NewOrderPage'
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
// import AuthPage from '../AuthPage/AuthPage'
// import NavBar from"../../components/NavBar/NavBar"


// function App() {
//   const [user, setUser] = useState({})

//   return (
//       <main className="App">
//         {
//           user ?
//           <> 
//             {/*  NavBar and routes are only available when the user is logged in  */}
//           <NavBar />
//             <Routes>
//               <Route path="/orders/new" element={<NewOrderPage />} />
//               <Route path="/orders" element={<OrderHistoryPage />} />
//             </Routes> 

//            </>
//           :
//             <AuthPage />
//         }
//       </main>
     
//   )
// }

// export default App




























//PART 1
{/* //W13D2 without the pages following folders and w/out moving the app.jsx and app.css to the App folder 

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() { */}
{/* //   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React + MERN</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App */}
