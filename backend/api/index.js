const { Router } = require('express');
const router = Router();

const eventsApi = require('./routes/eventsRoutes.js');
const photosApi = require('./routes/photosRoutes.js');
const userApi = require('./routes/userRoutes.js');
const groupsApi = require('./routes/groupsRoutes.js');

router.use('/events', eventsApi);
router.use('/photos', photosApi);
router.use('/user', userApi);
router.use('/groups', groupsApi);

module.exports = router;



