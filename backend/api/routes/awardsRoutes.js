const { Router } = require('express');


const router = Router();
const controller = require('../controllers/awardsController.js');


router.get('/buyAward', controller.userBuyAward);
router.get('/getDailyShop', controller.getDailyShop);
router.get('/getUserAwards', controller.getUserAwards);


module.exports = router;