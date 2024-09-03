exports.constants = {
    VALIDATION_ERROR: 400, // Bad Request - often used for validation errors
    UNAUTHORIZED: 401,     // Unauthorized - for authentication errors
    FORBIDDEN: 403,        // Forbidden - for access errors
    NOT_FOUND: 404,        // Not Found - when a resource is not found
    INTERNAL_SERVER_ERROR: 500, // Internal Server Error - generic server error
    CREATED: 201,          // Created - when a resource is successfully created
    ACCEPTED: 202,         // Accepted - request accepted but not yet processed
    NO_CONTENT: 204,       // No Content - request successful but no content to return
    BAD_GATEWAY: 502,      // Bad Gateway - server received an invalid response from the upstream server
    SERVICE_UNAVAILABLE: 503, // Service Unavailable - server is down or overloaded
    GATEWAY_TIMEOUT: 504   // Gateway Timeout - server did not receive a timely response from the upstream server
};