const { Router } = require('express');

const router = Router();
const controller = require('../controllers/eventsController.js');


router.get('/test', controller.getTest);

module.exports = router;