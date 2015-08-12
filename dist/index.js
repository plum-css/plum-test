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

/*
 * Builds and runs visual regression tests against plum stylesheets.
 *
 * @param {object.string} options.base - the base plum stylesheets directory.
 * @param {object.array}  options.stylesheets - array of compiled css stylesheets.
 * @param {object.array}  options.tests - array of files and/or directories where the tests are located.
 * @param {object.string} options.results - path where the results should be stored.
 * @param {function}      callback         - callback method thats executed after the test command has been run.
 */
var test = function test(options, cb) {
  var base = options.base;
  var stylesheets = options.stylesheets;
  var fixtures = options.results + '/fixtures';
  var failures = options.results + '/failures';
  var results = options.results + '/results';
  var tests = options.tests;

  var optionsFixture = { stylesheets: stylesheets, files: tests, destination: fixtures };
  var optionsRegression = { stylesheets: base, tests: tests, fixtures: fixtures, results: results, failures: results };

  (0, _plumFixture2['default'])(optionsFixture, function (err, res) {
    if (err) {
      return cb(err);
    };
    (0, _plumRegression2['default'])(optionsRegression, function (err, res) {
      if (err) {
        cb(err);
      };
      cb(null, res);
    });
  });
};

exports['default'] = test;
module.exports = exports['default'];