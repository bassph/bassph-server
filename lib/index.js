'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _apiRouter = require('./routers/apiRouter');

var _apiRouter2 = _interopRequireDefault(_apiRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = module.exports = (0, _express2.default)();

app.use([_express2.default.json(), _express2.default.urlencoded({ extended: true })]);
app.use((0, _methodOverride2.default)());

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use('/api', _apiRouter2.default);

app.use(function (req, res, next) {
  res.status(404).send('404', { url: req.originalUrl });
});

app.listen(8080);