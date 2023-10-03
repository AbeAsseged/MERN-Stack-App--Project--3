const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
   
    eventName: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
   
    eventLocation: {
        type: String,
        required: true
    },
    additionalInfo: {
        type: String
    },
    imageURL: {
        type: String
    },

    date:{
        type: Date,
        default: Date.now,
        required: true
    },
    eventTime: {
        type: String,
        required: true
    },
    
});


module.exports = model('Event', EventSchema);



















// const { Schema, model } = require('mongoose');

// const EventSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     },
//     eventName: {
//         type: String,
//         required: true
//     },
//     eventType: {
//         type: String,
//         required: true
//     },
//     guestRequired: {
//         type: Number,
//         required: true
//     },
//     guestsList: [
//         {
//             id: {
//                 type: String,
//                 required: true
//             },
//             name: {
//                 type: String,
//                 required: true
//             }
//         }
//     ],
//     eventLocation: {
//         type: String
//     },
//     additionalInfo: {
//         type: String
//     },
//     imageURL: {
//         type: String
//     },

//     date:{
//         type: Date,
//         default: Date.now
//     },
//     eventTime: {
//         type: String,
//     }
// });


// module.exports = model('Event', EventSchema);

