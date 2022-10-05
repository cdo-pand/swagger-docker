/* Custom error data */
let MyCustomError = function (message, error) {
    Error.call(this, message);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }
    this.name = 'MyCustomError';
    this.message = message;
    this.dateAndTime = new Date().toUTCString();
    if (error) this.inner = error;
};

MyCustomError.prototype = Object.create(Error.prototype);
MyCustomError.prototype.constructor = MyCustomError;

module.exports = MyCustomError;
