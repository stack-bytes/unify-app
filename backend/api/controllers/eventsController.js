const { Event } =  require('../../models/event-model'); 

const getTest = async (req, res) => {
     res.send('Hello from the controller!');
}

module.exports = {
    getTest
}