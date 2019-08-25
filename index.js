var express = require('express');
var mongoose = require('mongoose');

var config = require('./utils/config');
var setupController = require('./controllers/setupControler');
var apiController = require('./controllers/apiController');

var app = express();
var port =process.env.PORT|| 3200;

mongoose.connect(config.getDBConnectionString());
// setupController(app);
apiController(app);

app.listen(port);