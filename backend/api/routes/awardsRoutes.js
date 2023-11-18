const { Router } = require('express');


const router = Router();
const controller = require('../controllers/awardsController.js');


router.get('/buyAward', controller.userBuyAward);


module.exports = router;