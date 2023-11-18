const { EventPhoto } = require('../../models/eventPhoto-model');

const { uploader } = require('../../config/cloudinary');

const getPhotos = async (req, res) => {
    try {
        const body = req.body;

        const {
            eventId,
        } = body;
        
        if(!eventId){
            return res.send({message: 'Missing eventId'});
        }
        
        const photos = await EventPhoto.find({eventId: eventId});

        if(photos.length === 0){
            return res.send({message: 'No photos found'});
        }

        res.send({message: 'Photos found!', data: photos});

        
    } catch (e){
        console.log(e);
        res.status(500).json({message: e.message});
    }
}

const postPhoto = async (req, res) => {
    try {
        const body = req.body;
        const {
            userId,
            eventId
        } = body;

        if(!userId){
            return res.send({message: 'Missing userId'});
        }

        if(!eventId){
            return res.send({message: 'Missing eventId'});
        }

        if(req.file){
            const result = await uploader.upload(req.file.path);
            if(result){
                const newPhoto = await EventPhoto.create({
                    uri: result.secure_url,
                    eventId: req.body.eventId,
                    userId: req.body.userId,
                })

                res.send({data: newPhoto});
            } else {
                res.status(500);
            }
        }
    } catch (e) {
        console.log(e);
    }
}

const getPhotosFromEvent = async (req, res) => {
    try {
        const eventId = req.params.eventId;

        if(!eventId){
            return res.send({message: 'Missing eventId'});
        }

        const photos = await EventPhoto.find({eventId: eventId});

        if(photos.length === 0){
            return res.send({message: 'No photos found'});
        }

        res.send({message: 'Photos found!', data: photos});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: e.message});
    
    }
}


module.exports = {
    getPhotos,
    postPhoto,
    getPhotosFromEvent,
}