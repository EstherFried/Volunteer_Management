const mongoose = require('mongoose');

const VolunteersSchema = mongoose.Schema({
    volunteerCode: String,
    firstName: String,
    lastName: String,
    phone: String,
    internshipTypes: Array
},{collection:'volunteers'})

const model = mongoose.model('volunteers', VolunteersSchema);
module.exports = model;