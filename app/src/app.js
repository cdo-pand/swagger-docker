/** Default timezone. */
process.env.TZ = 'UTC';

const express = require('express');
// var cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();

const config = require('./Config/Config');

/* Required routes */
const healthCheckRouter = require('./Route/HealthCheck');
const mainRouter = require('./Route/Main');
const errorRouter = require('./Route/Error');

// app.use(cors());

/* Routes */
app.use('/app/health', healthCheckRouter);
app.use('/', mainRouter);

/** Errors. */
app.use(errorRouter);
app.use(config.errorHandler);

app.listen(PORT, () => {
    const appStatus = {
        'appStatus': `${PORT} is running`,
    };

    console.log(JSON.stringify(appStatus, 0, 2));
});
