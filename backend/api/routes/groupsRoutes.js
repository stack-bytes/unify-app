const { Router } = require('express');

const router = Router();
const controller = require('../controllers/groupsController.js');


router.get('/getGroups', controller.getGroups);
router.get('/getGroupById', controller.getGroupById);
router.post('/createGroup', controller.createGroup);
router.patch('/updateGroup', controller.updateGroup);
router.delete('/deleteGroup', controller.deleteGroup);

module.exports = router;