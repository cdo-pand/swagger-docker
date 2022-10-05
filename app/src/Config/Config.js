const MyCustomError = require('../Error/CustomError');

/* Basic error handler */
exports.errorHandler = (error, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(error.status || 500);

    if (this.isDebugEnabled()) {
        return res.json({
            error: {
                message: error.message || 'Something went wrong',
            },
        });
    } else {
        return res.json({});
    }
};

/* Caught error handler */
exports.caughtErrorHandler = (message, error) => {
    if (message === null) {
        message = 'Caught error.';
    }

    return new MyCustomError(message, error);
};

/* Check is dev env */
exports.isDev = () => {
    return process.env.APP_ENV === 'dev';
};

/* Check is debug enabled */
exports.isDebugEnabled = () => {
    return process.env.APP_DEBUG;
};
