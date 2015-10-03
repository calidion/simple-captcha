#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Simple node captcha service

![Captcha](/assets/captcha.png)


## Install

```sh
$ npm install --save simple-captcha
```


## Usage

```js
var express = require('express');
var http = express();

http.all('/', function(req, res) {
  var captcha = require('simple-captcha').create({width: 100, height: 40});
  console.log(captcha.text());
  captcha.generate();
  res.write(captcha.buffer('image/png'));
  res.end();
});
http.listen(9999, function() {
  console.log('Express Server Running on Port 9999');
  console.log('visit http://localhost:9999 to see the captcha');
});
```


## License

MIT © [calidion](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/simple-captcha.svg
[npm-url]: https://npmjs.org/package/simple-captcha
[travis-image]: https://travis-ci.org/JSSDKCN/simple-captcha.svg?branch=master
[travis-url]: https://travis-ci.org/JSSDKCN/simple-captcha
[daviddm-image]: https://david-dm.org/JSSDKCN/simple-captcha.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/JSSDKCN/simple-captcha
