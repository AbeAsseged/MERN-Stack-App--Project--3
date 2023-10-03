const Event = require('../../models/event.cjs');

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const event = await newEvent.save();
    res.json(event);
  } catch (error) {
    // res.status(500).json({ error: 'Server error' });
    console.log(error)
  }
};

// Update an existing event
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};









// const eventsCtrl = require('../../models/event.cjs');

// module.exports = function checkTokenEvent(data){
//     let errors = {};

//     data.eventName = !isEmpty(data.eventName) ? data.eventName: '';
//     data.eventType = !isEmpty(data.eventType) ? data.eventTypeype: '';
//     data.guestRequired = !isEmpty(data.guestRequired) ? data.guestRequired: '';

//     if(checkTokenEvent.isEmpty(data.eventName)){
//         errors.eventName = 'Name of event is required';
//     }

//     if(checkTokenEvent.isEmpty(data.eventType)){
//         errors.eventType = 'Type of sport field is required';
//     }

//     if(!checkTokenEvent.isNumeric(data.guestRequired)){
//         errors.guestRequired = 'Must be a number';
//     }

//     if(checkTokenEvent.isEmpty(data.guestRequired)){
//         errors.guestRequired = 'Number of player field is required';
//     }

//     if(!isEmpty(data.imageURL)){
//         if(!Validator.isURL(data.imageURL)){
//             errors.imageURL = 'Not a valid URL';
//         }
//     }

//     return {
//         errors,
//         isValid: isEmpty(errors)
//     };
// };

