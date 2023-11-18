const { Event } =  require('../../models/event-model'); 

const getEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.send(events);
    } catch (e) {
        console.log(e);
        res.send({message: 'Internal Server Error'});
    }
}

const createEvent = async (req, res) => {
    try {
        const body = req.body;

        const {
            userId,
            name,
            type,
            backgroundPic,
            members,
            groups,
            location,
        } = body;

        if(!name){
            return res.send({message: 'Missing name'});
        }

        if(!type){
            return res.send({message: 'Missing type'});
        }

        if(!backgroundPic){
            return res.send({message: 'Missing backgroundPic'});
        }

        if(!members){
            return res.send({message: 'Missing members'});
        }

        if(!groups){
            return res.send({message: 'Missing groups'});
        }

        if(!location){
            return res.send({message: 'Missing location'});
        }

        const event = await Event.create({
            name,
            type,
            backgroundPic,
            members,
            groups,
            location,
            organizer: userId,
            createdAt: new Date(),
            updatedAt: new Date(),
            icebreaker: '',
            photos: [],
            trending: false,
        });

        res.send({message: 'Event created!', data: event});
    } catch (e) {
        console.log(e);
        res.send({message: 'Internal Server Error'});
    }
}

module.exports = {
    getEvents,
    createEvent
}