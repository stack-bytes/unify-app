const mongoose = require('mongoose');

const eventPhotoSchema = new mongoose.Schema({
    createdAt: Date, // the date when the event was created
    updatedAt: Date, // the date when the event was last updated
    userId: String, // the id of the user who took the photo
    uri: String, // the uri of the photo
    eventId: String, // the id of the event where the photo was taken
})

const EventPhoto = mongoose.model('EventPhoto', eventPhotoSchema);

module.exports = {EventPhoto};

