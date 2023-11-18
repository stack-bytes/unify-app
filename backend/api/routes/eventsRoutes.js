const { Router } = require('express');

const router = Router();
const controller = require('../controllers/eventsController.js');


router.get('/getEvents', controller.getEvents);
router.post('/createEvent', controller.createEvent);

module.exports = router;