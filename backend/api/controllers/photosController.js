const { EventPhoto } = require('../../models/eventPhoto-model');

const { uploader } = require('../../config/cloudinary');

const getPhotos = () => {
    try {

    } catch (e){
        console.log(e);
    }
}

const postPhoto = async (req, res) => {
    try {
        if(req.file){
            const result = await uploader.upload(req.file.path);
            if(result){
                res.send({message: "Photo uploaded!"});
            } else {
                res.status(500);
            }
        }
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    getPhotos,
    postPhoto,
}