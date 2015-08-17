#!/usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _indexJs = require('./index.js');

var _indexJs2 = _interopRequireDefault(_indexJs);

var args = (0, _minimist2['default'])(process.argv.slice(2));
var options = {
  base: args.base,
  stylesheets: args.stylesheets.split(','),
  tests: args.tests.split(','),
  results: args.results
};

(0, _indexJs2['default'])(options, function (err, res) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(res);
});