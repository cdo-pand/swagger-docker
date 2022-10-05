const express = require('express');
const router = express.Router();
const healthCheckController = require('../Controller/HealthCheck');

router.get('/', healthCheckController.healthCheck);
router.post('/', healthCheckController.healthCheck);

module.exports = router;
