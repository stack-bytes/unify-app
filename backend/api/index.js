const { Router } = require('express');
const router = Router();

const eventsApi = require('./routes/eventsRoutes.js');
const photosApi = require('./routes/photosRoutes.js');

const awardsApi = require('./routes/awardsRoutes.js');
const userApi = require('./routes/userRoutes.js');
const groupsApi = require('./routes/groupsRoutes.js');

router.use('/events', eventsApi);
router.use('/photos', photosApi);
router.use('/user', userApi);
router.use('/groups', groupsApi);
router.use('/awards', awardsApi);


module.exports = router;



