const express = require('express');

//internal imports
const config = require('./config/default');
const senderRoute = require('./lib/routes/sender.route');

const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));

//Routes (APIs)
app.use('', senderRoute);

app.listen(config.server.port, ()=> {
    console.log('service_one running on port ' + config.server.port);
})