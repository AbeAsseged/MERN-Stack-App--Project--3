// import { useState, useEffect, useRef } from 'react';
// import styles from './NewEventPage.module.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
// import NavBar from '../../components/NavBar/NavBar';
// import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import LoginForm from '../../components/LoginForm/LoginForm';

// const express = require('express');
// const router = express.Router();
// const eventsCtrl = require('../../controllers/api/events.cjs');
// const Event = require('../../models/event.cjs');
// const routes = require('../../routes/api/events.cjs')


import React, {useState, useEffect} from 'react';
import axios from 'axios';

const HostEventPage = () => {
    const [events, setEvents] = useState([]);
    const [joinCounts, setJoinCounts] = useState({});
    const [newEvent, setNewEvent] = useState({
        eventName: '',
        eventType: '',
        eventLocation: '',
        additionalInfo: '',
        imageURL: '',
        date: '',
        eventTime:''
    });

    function handleChange(evt) {
        setNewEvent({
            ...newEvent,
            [evt.target.name]: evt.target.value
        })
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/api/events');
            console.log(response.data)
            setEvents( response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const createEvent = async () => {
      console.log('createEvent')
      console.log(newEvent)
        try {
            await axios.post('/api/events', newEvent);
            setNewEvent({});
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };


    const handleJoinEvent = async (eventId) => {
      try {
        await axios.post(`/api/events/${eventId}/join`);
        setJoinCounts((prevCounts) => ({
          ...prevCounts,
          [eventId]: (prevCounts[eventId] || 0) + 1,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    const updateEvent = async (eventId, updatedEvent) => {
        try {
            await axios.put(`/api/events/${eventId}`, updatedEvent);
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteEvent = async (eventId) => {
        try {
            await axios.delete(`/api/events/${eventId}`);
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Event App</h1>
            <h2>Host an Event</h2>
            <form onSubmit={createEvent}>
                <input type="String" name='eventName' placeholder="Event Name"
                    value={
                        newEvent.eventName || ''
                    }
                    onChange={
                        (e) => setNewEvent({
                            ...newEvent,
                            eventName: e.target.value
                        })
                    }/>
                <input type="Date" name='date' placeholder="Event Date"
                    value={
                        newEvent.date || ''
                    }
                    onChange={
                        (e) => setNewEvent({
                            ...newEvent,
                            date: e.target.value
                        })
                    }/>
                <input type="String" name='eventLocation' placeholder="Event Location"
                    value={
                        newEvent.eventLocation || ''
                    }
                    onChange={
                        (e) => setNewEvent({
                            ...newEvent,
                            eventLocation: e.target.value
                        })
                    }/>
                <input type="String" name='eventType' placeholder="Event Type"
                    value={
                        newEvent.eventType || ''
                    }
                    onChange={
                        (e) => setNewEvent({
                            ...newEvent,
                            eventType: e.target.value
                        })
                    }/>
                <input type="String" name='eventTime' placeholder="Event Time"
                    value={
                        newEvent.eventTime || ''
                    }
                    onChange={
                        (e) => setNewEvent({
                            ...newEvent,
                            eventTime: e.target.value
                        })
                    }/>
                <input type="String" name='additionalInfo' placeholder="Additional Info"
                    value={
                        newEvent.additionalInfo || ''
                    }
                    onChange={
                        (e) => setNewEvent({
                            ...newEvent,
                            additionalInfo: e.target.value
                        })
                    }/>
                <input type="String" name='imageURL' placeholder="Image URL"
                    value={
                        newEvent.imageURL || ''
                    }
                    onChange={
                        (e) => setNewEvent({
                            ...newEvent,
                            imageURL: e.target.value
                        })
                    }/>
                <button type="submit">Create Event</button>
            </form>

            <h2>Events</h2>
            {
            events.map((event) => { 
              console.log(event)
              return (
                <div key={
                    event._id
                }>
                    <h3>{
                        event.eventName
                    }</h3>
                    <p>{
                        event.eventType
                    }</p>
                    <button onClick={
                        () => updateEvent(event._id, {joined: true})
                    }>Join Event</button>
                    <button onClick={() => handleJoinEvent(event._id)}>Join Event</button>
                    <span>Join Count: {joinCounts[event._id] || 0}</span>
                    <button onClick={
                        () => deleteEvent(event._id)
                    }>Delete Event</button>
                </div>
            )

            } )
        } </div>
    );
};

export default HostEventPage;


// const express = require('express');
// const router = express.Router();
// const eventsCtrl = require('../../controllers/api/events.cjs');
// const Event = require('../../models/event.cjs');
// const routes = require('../../routes/api/events.cjs')
// import React, { useState } from 'react';


// function HostEventPage() {
// const [events, setEvents] = useState([]);
// const [searchQuery, setSearchQuery] = useState('');

// const handleHostEvent = (event) => {
//     // Logic to handle hosting an event
//     // Add the event to the events array
//     setEvents([...events, event]);
// };

// const handleSearch = () => {
//     // Logic to handle searching for events
//     // Filter the events array based on the search query
//     const filteredEvents = events.filter((event) =>
//       event.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     // Perform any action with the filtered events
//     console.log(filteredEvents);
// };

// return (
//     <div>
//       <h1>Events App</h1>
//       <h2>Host an Event</h2>
//       <form onSubmit={handleHostEvent}>
//         <input type="String" placeholder="Event Name" />
//         <input type="Date" placeholder="Event Date" />
//         <input type="String" placeholder="Event Location" />
//         <input type="String" placeholder="Event Type" />
//         <input type="String" placeholder="Event Time" />
//         <input type="String" placeholder="Additional Info" />
//         <input type="String" placeholder="Image URL" />
//         <button type="submit">Host Event</button>
//       </form>

//       <h2>Search for Events</h2>
//       <input
//         type="String"
//         placeholder="Event Name"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       </div>

// );
// }


// export default HostEventPage


// function onButtonClick(){
// document.getElementById('textInput').className="show";
// }

// <div class="answer_list" > WELCOME </div>
// <input type="button" name="answer" value="Show Text Field" onclick="onButtonClick()" />
// <input class="hide" type="text" id="textInput" value="..." />


// w14D1
// function NewOrderPage() {
// return (
//     <div>NewOrderPage</div>
// )
// }

// export default NewOrderPage
