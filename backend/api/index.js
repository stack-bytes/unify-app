const { Router } = require('express');
const router = Router();

const eventsApi = require('./routes/eventsRoutes.js');



router.use('/events', eventsApi);


module.exports = router;



