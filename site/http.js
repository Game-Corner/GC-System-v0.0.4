const http = require('http'); 
const express = require('express');
const app = express();
var favicon = require('serve-favicon');
var path = require('path');
var date = new Date();

app.set('port', (process.env.PORT || 5000));

app.set('views', '/app/site');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.use(favicon(path.join('site', 'files', 'favicon.ico')));

if (6 <= date.getHours() <= 22) {
  setInterval(function() {
    http.get("http://gc-system.herokuapp.com/");
  }, 300000); // every 5 minutes (300000)
};
