const { Router } = require('express');
const multer = require('multer');

const router = Router();
const controller = require('../controllers/photosController.js');

const upload = multer({dest: 'uploads/'})


router.get('/getPhotos', controller.getPhotos);
router.get('/getPhotosFromEvent/:eventId', controller.getPhotosFromEvent);
router.post('/postPhoto', upload.single('photo'), controller.postPhoto);

module.exports = router;