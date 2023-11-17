const mongoose = require('mongoose');   

const AwardSchema = new mongoose.Schema({
    name: String, // the name of the award (e.g. "community-pillar")
    icon: String, // the icon of the award
    price: Number, // the price of the award
    title: String, // the title of the award (e.g. "Community Pillar")
    description: String, // the description of the award (e.g. "You are a great person!")
})

const Award = mongoose.model('Award', AwardSchema); 

module.exports = {Award};