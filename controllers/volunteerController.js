const Controller = require('./Controller');
const volunteersService = require('../services/volunteersSrvice');

class VolunteerController extends Controller {
    constructor() {
        super(volunteersService);
    }
}

let volunteerController = new VolunteerController();
module.exports = volunteerController;
