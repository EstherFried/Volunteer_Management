const express = require("express");
const mongooseConnect = require("./db/mongoConnect");
const helpRequestsRoute = require('./routes/helpRequesrs');
const volunteersRoute = require('./routes/volunteers');
const app = express();
const port = 3000;

app.use('/api/helpRequest', helpRequestsRoute);

(async ()=> {
    await mongooseConnect();
})();
