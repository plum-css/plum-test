#!/usr/bin/env node

import minimist from 'minimist';
import test from './index.js';

const args    = minimist(process.argv.slice(2));
const options = {
  base        : args.base,
  stylesheets : args.stylesheets.split(',').map(path => path.trim()),
  tests       : args.tests.split(',').map(path => path.trim()),
  results     : args.results
};

test(options, (err, res) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(res);
});
