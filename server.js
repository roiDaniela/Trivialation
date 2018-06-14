var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8000;
var username;

// mongoose.connect('mongodb://localhost/spacebookDB', {useMongoClient: true}, function() {
//     console.log("DB connection established!!!");
// });

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Connect to port 8080.
 */
app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
});

// app.get('/', function(req, res){
//     res.sendfile('login.html', { root: __dirname + "/public"} );
// });