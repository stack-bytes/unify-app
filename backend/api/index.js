const { Router } = require('express');
const router = Router();

const eventsApi = require('./routes/eventsRoutes.js');
const photosApi = require('./routes/photosRoutes.js');



router.use('/events', eventsApi);
router.use('/photos', photosApi);

module.exports = router;



