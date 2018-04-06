'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _scanResultController = require('../controllers/scanResultController');

var _scanResultController2 = _interopRequireDefault(_scanResultController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/scanresults', _scanResultController2.default.post);

exports.default = router;