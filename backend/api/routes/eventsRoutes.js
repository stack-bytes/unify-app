const { Router } = require('express');

const router = Router();
const controller = require('../controllers/eventsController.js');


router.get('/getEvents', controller.getEvents);
router.get('/getEventById', controller.getEventById);
router.post('/createEvent', controller.createEvent);
router.patch('/updateEvent', controller.updateEvent);
router.delete('/deleteEvent', controller.deleteEvent);
router.get('/getMarkers', controller.getMarkers);


module.exports = router;