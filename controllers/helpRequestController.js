const Controller = require('./Controller');
const helpRequestsService = require('../services/helpRequestsService');

class HelpRequestController extends Controller {
    constructor() {
        super(helpRequestsService)
    }
}

let helpRequestController = new HelpRequestController();
module.exports = helpRequestController;