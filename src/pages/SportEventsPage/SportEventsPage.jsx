const express = require('express');
const router = express.Router();
const sporteventsCtrl = require('../../controllers/api/sportEvents.cjs');
const sportEvent = require('../../models/sportEvent.cjs');


document.addEventListener('ContentReady', function() {
  const eventForm = document.getElementById('event-form');
  const eventsList = document.getElementById('events');
  
  eventForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventLocation = document.getElementById('event-location').value;
    const eventType = document.getElementById('event-type').value;
    const eventTime = document.getElementById('event-time').value;
    
    const eventItem = document.createElement('li');
    eventItem.textContent = `${eventName} - ${eventDate} - ${eventLocation}, ${eventType}, ${eventTime}`;
    
    eventsList.appendChild(eventItem);
    
    eventForm.reset();
  });
});



    // function onButtonClick(){
    //   document.getElementById('textInput').className="show";
    // }
   
    // <div class="answer_list" > WELCOME </div>
    // <input type="button" name="answer" value="Show Text Field" onclick="onButtonClick()" />
    // <input class="hide" type="text" id="textInput" value="..." />
    


export default sportsEvent








// w14D1
// function NewOrderPage() {
//   return (
//     <div>NewOrderPage</div>
//   )
// }

// export default NewOrderPage