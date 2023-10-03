const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events.cjs');



// Get all events
router.get('/', eventsCtrl.getAllEvents);

// Get a single event by ID
router.get('/:id', eventsCtrl.getEventById);

// Create a new event
router.post('/', eventsCtrl.createEvent);

// Update an existing event
router.put('/:id', eventsCtrl.updateEvent);

// Delete an event
router.delete('/:id', eventsCtrl.deleteEvent);

module.exports = router;
















// const express = require('express');
// const router = express.Router();
// const eventsCtrl = require('../../controllers/api/events.cjs');
// const Event = require('../../models/event.cjs');

// router.get('/', async (req, res) => {
//     const Event = await Event.find({})
//     res.send('all good')
// }
// )


// // router.post('/', eventsCtrl.create);
// router.post('/',(req, res) => {
//     const {errors, isValid} = eventsCtrl(req.body);

//     if(!isValid){
//         return res.status(400).json(errors);
//     }

//     const eventFields = {};
//     eventFields.user = req.user.id;

//     if(req.body.eventName) eventFields.eventName = req.body.eventName;
//     if(req.body.eventType) eventFields.eventType = req.body.eventType;
//     if(req.body.guestsRequired) eventFields.GuestRequired = req.body.GuestRequired;
//     if(req.body.eventLocation) eventFields.eventLocation = req.body.eventLocation;
//     if(req.body.additionalInfo) eventFields.additionalInfo = req.body.additionalInfo;
//     if(req.body.imageURL) eventFields.imageURL = req.body.imageURL;
//     if(req.body.eventTime) eventFields.eventTime = req.body.eventTime;

//     new Event(eventFields).save().then(event => res.json(event));
// });

// router.get('/:id', (req, res) => {
//     Event.findById(req.params.id)
//         .populate('user', ['name'])
//         .then(event => res.json(event))
//         .catch(err =>
//             res.status(404).json({error: "Error in get api/events/:id. " + err})
//         );
// });



// router.put('/:id/join',  (req, res) => {
   
//     Event.findById(req.params.id)
//         //.populate('user', ['name'])
//         .then(event => {
//             if(!event){
//                 return res.status(404).json({msg: 'This event is no longer available:',
//             event:event});
//             }
            
//             let count = 0;
            
//             for(let i of event.guestList){
//                 if(i["id"] === req.user.id){
//                     return res.status(400).json({msg: 'You have already joined this event:', event:event});
//                 }
//                 count++;
//             }
            
//             if(count >= event.GuestRequired){
//                 return res.status(400).json({msg: 'This event is full:', event:event});
//             }
            
//             const userName = req.body.userName;
            
//             const newGuest = {
//                 id: req.body.user_id,
//                 name: userName
//             };
//             console.log(newguest);
//             event.guestList.push(newguest);
//             return event.save();
//         })
//         .then(result => {
           
//             res.status(200).json({
//                 msg: 'Success on joining that event',
//                 event: result
//             });
//         })
//         .catch(err => res.status(404).json({error: "Error in put api/events/:id/join. " + err}));
// });





// router.delete('/:id', (req, res) => {
//     Event.findById(req.params.id)
//         .then(event => {
//             if(event.user.toString() !== req.user.id){
//                 return res.status(401).json({msg: 'You are not authorized to delete this event:',event:event});
//             }
//             event.remove().then(() => res.status(200).json({msg: 'You have successfully deleted this event:',event:event}));
//         })
//         .catch(err => res.status(404).json({error: "Error in delete api/events/:id. " + err}));
// });

// module.exports = router;