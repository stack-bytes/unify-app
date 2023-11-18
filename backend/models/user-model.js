const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String, // the username of the user
    email: String, // the email of the user
    pfp: String, // the profile picture of the user
    password: String, // the password of the user
    friends: [], // the id's of every friend of the user
    friendRequests: [], // the id's of every friend request the user has received
    inventory: [], // the id's of every item the user has
    events: [], // the id's of ethe last 10 eventsd the user was involved in
    currentEvent: String, // the id of the event the user is currently in
    points: Number, // the amount of points the user has earned
    location: { //the location of the user
        latitude: Number, // the latitude of the user
        longitude: Number // the longitude of the user
    },
    ghostMode: Boolean, // whether the user is in ghost mode or not (determines whether the user's location is visible to other users)
    groups: [], // the id's of every group the user is in
    pronouns: [] //the pronouns (string[]) of the user [he/him, she/her, they/them]
})

const User = mongoose.model('User', userSchema);

module.exports = {User};