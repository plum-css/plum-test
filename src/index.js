/**
 * plum-test
 * https://github.com/plum-css/plum-test
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
import fixture from 'plum-fixture';
import regression from 'plum-regression';

/*
 * Builds and runs visual regression tests against plum stylesheets.
 *
 * @param {object.string} options.base - the base plum stylesheets directory.
 * @param {object.array}  options.stylesheets - array of compiled css stylesheets.
 * @param {object.array}  options.tests - array of files and/or directories where the tests are located.
 * @param {object.string} options.results - path where the results should be stored.
 * @param {function}      callback         - callback method thats executed after the test command has been run.
 */
const test = (options, cb) => {
  const base        = options.base;
  const stylesheets = options.stylesheets;
  const fixtures    = options.results + '/fixtures';
  const failures    = options.results + '/failures';
  const results     = options.results + '/results';
  const tests       = options.tests;

  const optionsFixture    = {stylesheets: stylesheets, files: tests, destination: fixtures};
  const optionsRegression = {stylesheets: base, tests: tests, fixtures: fixtures, results: results, failures: results};

  fixture( optionsFixture, (err, res) => {
    if (err) {
      return cb(err);
    }
    regression(optionsRegression, (err, res) => {
      if (err) {
        return cb(err);
      }
      return cb(null, res);
    });
  });
}

export default test;
