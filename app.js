var express = require('express');
var mongoose = require ("mongoose");
var bodyParser = require('body-parser')

var app = express();
// app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


var http = require ('http'); // For serving a basic web page.
var mongoose = require ("mongoose"); // The reason for this demo.


// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/HelloMongoose';

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

var vegetables = [
        {name: "acorn squash"},
        {name: "alfalfa sprout"}];



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/vegetables', function (req, res) {
  res.send(vegetables);
});

app.post('/api/vegetables', function (req, res) {
  vegetables.push(req.body);
  res.send(req.body);
});

app.put('/api/vegetables', function (req, res) {
  vegetables.push(req.body);
  res.send(req.body);
});

app.get('/about', function (req, res)
{
  res.render('angular-example-restangular.html');
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
