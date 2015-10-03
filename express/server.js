var express = require('express');
var http = express();

http.all('/', function(req, res) {
  var captcha = require('../').create({width: 100, height: 40});
  console.log(captcha.text());
  captcha.generate();
  res.write(captcha.buffer('image/png'));
  res.end();
});
http.listen(9999, function() {
  console.log('Express Server Running on Port 9999');
});


