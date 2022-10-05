const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
    return res.status(404).json({});
});

/** Swagger */
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocument = yaml.load('./swagger.yml')
const swaggerOptions = {
    customSiteTitle: 'Betolimp API docs',
    explorer: false,
    customCss: '.swagger-ui .topbar { display: none }' // hide header
}

/** Swagger docs. */
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions))

module.exports = router;
