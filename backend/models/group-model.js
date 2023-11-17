const mongoose =  require('mongoose');

const GroupSchema = new mongoose.Schema({
    name: String, // the name of the event 
    icon: String, // the icon poicture of a group
    members: [], // the id's of every person involved in the group
    events: [], // the id's of every event involved in the group
    createdAt: Date, // the date when the group was created
    updatedAt: Date, // the date when the group was last updated
})

const Group = mongoose.model('Group', GroupSchema);

module.exports = {Group};