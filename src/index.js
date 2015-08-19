/**
 * plum-test
 * https://github.com/plum-css/plum-test
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
import fixture from 'plum-fixture';
import regression from 'plum-regression';
import fs from 'fs';
import path from 'path';

/*
 * Builds and runs visual regression tests against plum stylesheets.
 *
 * @param {object.string} options.src - the src plum stylesheets directory.
 * @param {object.string} options.dest - path where the results should be stored.
 * @param {object.array}  options.stylesheets - array of compiled css stylesheets.
 * @param {function}      callback - callback method thats executed after the test command has been run.
 */
const test = (options, cb) => {
  const src         = options.src;
  const fixtures    = options.dest + '/fixtures';
  const failures    = options.dest + '/failures';
  const results     = options.dest + '/results';
  const stylesheets = options.stylesheets;
  const tests       = fs.readdirSync(src)
    .filter(file => ['modules', 'units', 'pages', 'layouts'].indexOf(file) !== -1)
    .map(file => path.join(src, file))
    .filter(file => fs.statSync(file).isDirectory());

  fixture({stylesheets: stylesheets, files: tests, destination: fixtures}, (err, res) => {
    if (err) {
      return cb(err);
    }
    regression({stylesheets: src, tests: tests, fixtures: fixtures, results: results, failures: failures}, (err, res) => {
      if (err) {
        return cb(err);
      }
      return cb(null, res);
    });
  });
}

export default test;
