const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({
    name: String, // name of the event: FreshmenParty
    type: String, // type of the event: houseParty, clubbing, etc.
    backgroundPic: String, // background picture of the event
    members: [], // the id's of every person involved in the event
    groups: [], // the id's of every group involved in the event
    coords: {
        latitude: String, //N/S
        longitude: String, //W/E
    },
    location: String, // the location of the event
    organizer: String, // the id of the organizer
    createdAt: Date, // the date when the event was created
    updatedAt: Date, // the date when the event was last updated
    icebreaker: String, // the topic that individuals started to talk about
    photos: [], // the id's of every photo taken at the event
    trending: Boolean, // if the event is trending or not
})

const Event = mongoose.model('Event', EventSchema);

module.exports = {Event}