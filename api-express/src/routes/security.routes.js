const { Router } = require('express');

const router = Router();

const securityController = require('../controllers/security.controller');

router.post('/login', securityController.login);

module.exports = router;