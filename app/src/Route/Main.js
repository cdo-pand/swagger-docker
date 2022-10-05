const express = require('express');
const router = express.Router();
const axios = require('axios');

router.all('/', (req, res) => {
    return res.status(404).json({});
});

/** Swagger */
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yml');
const swaggerOptions = {
    customSiteTitle: 'API docs',
    explorer: false,
    customCss: '.swagger-ui .topbar { display: none }', // hide header
};

/** Swagger docs. */
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

router.get('/example', (req, res) => {
    axios.get('https://api2dev.betolimp.co.za/v1/languages')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });

    return res.status(200).json({
        message: 'Success.',
    });
});

module.exports = router;
