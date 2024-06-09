const helpRequestModel = require('../models/helpRequestModel');

class helpRequestService {
    getAll(queryParameters) {
        let result = helpRequests.find({});
        return result;
    }
}