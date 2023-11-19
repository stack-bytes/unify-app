const { Router } = require('express');

const router = Router();
const controller = require('../controllers/userController.js');

router.get('/getUsers', controller.getUsers);
router.get('/getUserById', controller.getUserById);
router.post('/createUser', controller.createUser);
router.delete('/deleteUser', controller.deleteUser);
router.patch('/updateUser', controller.updateUser);
router.get('/getUserFriends', controller.getUserFriends);
router.post('/addUserToEvent', controller.addUserToEvent);
router.get('/isuserorganizer', controller.isUserOrganizer);

module.exports = router;