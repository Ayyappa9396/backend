const { constants } = require("../constants");

const errorHandler  = (err, req, res, next) => {
    const statusCode = res.statusCode ?  res.statusCode : 500

    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
            break;
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: err.message, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack });
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.json({ title: "Internal Server Error", message: err.message, stackTrace: err.stack });
            break;
        case constants.CREATED:
            res.status(constants.CREATED).json({ title: "Created", message: "Resource created successfully" });
            break;
        case constants.ACCEPTED:
            res.status(constants.ACCEPTED).json({ title: "Accepted", message: "Request accepted, processing" });
            break;
        case constants.NO_CONTENT:
            res.status(constants.NO_CONTENT).send(); // No content to return
            break;
        case constants.BAD_GATEWAY:
            res.json({ title: "Bad Gateway", message: err.message, stackTrace: err.stack });
            break;
        case constants.SERVICE_UNAVAILABLE:
            res.json({ title: "Service Unavailable", message: err.message, stackTrace: err.stack });
            break;
        case constants.GATEWAY_TIMEOUT:
            res.json({ title: "Gateway Timeout", message: err.message, stackTrace: err.stack });
            break;
        default:
            res.status(500).json({ title: "Unknown Error", message: err.message, stackTrace: err.stack });
            break;
    }
    
}

module.exports = errorHandler