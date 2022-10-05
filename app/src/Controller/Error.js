/* Create not found error */
exports.notFound = (req, res, next) => {
    const error = new Error('Not found.');
    error.status = 404;
    console.log(res);
    next(error);
};
