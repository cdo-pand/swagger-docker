const express = require('express');
const router = express.Router();
const errorController = require('../Controller/Error');

router.all('*', errorController.notFound);

module.exports = router;
