var express = require('express'), cors = require('cors');
var connection = require('./connection');
var routes = require('./routes');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());

connection.init();
routes.configure(app);
var server = app.listen(8000, function() {
  console.log('Server listening on port ' + server.address().port);
});