/** Check if server alive */
exports.healthCheck = (req, res) => {
    const data = {
        uptime: Math.floor(process.uptime()),
        message: 'Ok',
        date: new Date().toUTCString(),
    };

    res.status(200).send(data);
};
