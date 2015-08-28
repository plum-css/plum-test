/**
 * plum-test
 * https://github.com/plum-css/plum-test
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _plumFixture = require('plum-fixture');

var _plumFixture2 = _interopRequireDefault(_plumFixture);

var _plumRegression = require('plum-regression');

var _plumRegression2 = _interopRequireDefault(_plumRegression);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

/*
 * Builds and runs visual regression tests against plum stylesheets.
 *
 * @param {object.string} options.src - the src plum stylesheets directory.
 * @param {object.string} options.dest - path where the results should be stored.
 * @param {object.array}  options.stylesheets - array of compiled css stylesheets.
 * @param {object.array}  [options.tests=['modules', 'units', 'pages', 'layouts']] - directories to test.
 * @param {function}      callback - callback method thats executed after the test command has been run.
 */
var test = function test(options, cb) {
  var src = options.src;
  var fixtures = options.dest + '/fixtures';
  var failures = options.dest + '/failures';
  var results = options.dest + '/results';
  var stylesheets = options.stylesheets;
  var tests = options.tests || _fs2['default'].readdirSync(src).filter(function (file) {
    return ['modules', 'units', 'pages', 'layouts'].indexOf(file) !== -1;
  }).map(function (file) {
    return _path2['default'].join(src, file);
  }).filter(function (file) {
    return _fs2['default'].statSync(file).isDirectory();
  });

  (0, _plumFixture2['default'])({ stylesheets: stylesheets, files: tests, destination: fixtures }, function (err, res) {
    if (err) {
      return cb(err);
    }
    (0, _plumRegression2['default'])({ stylesheets: src, tests: tests, fixtures: fixtures, results: results, failures: failures }, function (err, res) {
      if (err) {
        return cb(err);
      }
      return cb(null, res);
    });
  });
};

exports['default'] = test;
module.exports = exports['default'];