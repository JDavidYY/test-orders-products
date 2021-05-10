const {Router} = require('express');

const router = Router();

const userController = require('../controllers/user.controller');

router.post('/saveClient', userController.saveClient);
router.get('/getClients', userController.getClients);

module.exports = router;