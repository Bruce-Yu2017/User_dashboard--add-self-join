var express = require('express');

var bodyParser = require('body-parser');

//bcrypt here
// var bcrypt = require('bcrypt');

//script here
var scrypt = require("scrypt");


var path = require('path')

var app = express();

app.use(express.static(path.join(__dirname,'./client/dist')));

app.use(bodyParser.urlencoded({extends: true}));

app.use(bodyParser.json());

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);


var port = 8000;
app.set('port', (process.env.PORT || port));
app.listen(app.get('port'),function(){
  console.log("App is running on port 8000!");
})
// app.listen(8000,function(){
//   console.log("App is running on port 8000!");
// })
