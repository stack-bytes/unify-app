const { Router } = require('express');
const router = Router();

const eventsApi = require('./routes/eventsRoutes.js');
const photosApi = require('./routes/photosRoutes.js');
const awardsApi = require('./routes/awardsRoutes.js');


router.use('/events', eventsApi);
router.use('/photos', photosApi);
router.use('/awards', awardsApi);

module.exports = router;



