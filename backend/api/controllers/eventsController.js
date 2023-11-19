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

const getMarkers = async (req, res) => {
    try {
        const markers = await Event.find({}, {location: 1});
        res.send(markers);
    } catch (e) {
        console.log(e);
        res.send({message: 'Internal Server Error'});
    }
}

const getEventById = async (req, res) => {
    try {
        //const body = req.body;

        const eventId = req.params.eventId;

        console.log(req.params);

        if(!eventId){
            return res.send({message: 'Missing eventId'});
        }

        const event = await Event.findOne({_id: eventId});

        if(!event){
            return res.send({message: 'Event not found'});
        }

        res.send({message: 'Event found!', data: event});
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
            location,
            coords
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

        if(!location){
            return res.send({message: 'Missing location'});
        }

        if(!coords){
            return res.send({message: 'Missing coords'});
        }

        const event = await Event.create({
            name,
            type,
            backgroundPic,
            members: [],
            groups: [],
            location,
            coords,
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

const updateEvent = async (req, res) => {
    try {
        const body = req.body;

        const {
            eventId,
        } = body;

        if(!eventId){
            return res.send({message: 'Missing eventId'});
        }

        const event = await Event.updateOne({_id: eventId}, {
            $set: body,
            $currentDate: { updatedAt: true }
        });

        return res.send({message: 'Success', data: event});
    } catch (e){
        res.status(500).json({message: e.message});
    }

}

const deleteEvent = async (req, res) => {
    try {
        const body = req.body;

        const {
            eventId,
        } = body;

        if(!eventId){
            return res.send({message: 'Missing eventId'});
        }

        const event = await Event.deleteOne({_id: eventId});

        return res.send({message: 'Success', data: event});
    } catch (e){
        res.status(500).json({message: e.message});
    }

}

module.exports = {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
    getMarkers
}