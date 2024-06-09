const mongoose = require('mongoose');

const helpRequestSchema = mongoose.Schema({
    location: String,
    description: String,
    contactPhoneNumber: String,
    status: String,
    numPeopleStuck: Number,
    priorityCode: String,
    volunteerCode: String
},{collction:'helpRquests'});

const helpRequestModel = mongoose.model('helpRequests',helpRequestSchema);
exports.helpRequestModel = helpRequestModel;