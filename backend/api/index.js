const { Router } = require('express');
const router = Router();

const eventsApi = require('./routes/eventsRoutes.js');
const photosApi = require('./routes/photosRoutes.js');
const userApi = require('./routes/userRoutes.js');


router.use('/events', eventsApi);
router.use('/photos', photosApi);
router.use('/user', userApi);

module.exports = router;



