#!/usr/bin/env node

import minimist from 'minimist';
import test from './index.js';

const args    = minimist(process.argv.slice(2));
const options = {
  base        : args.base,
  stylesheets : args.stylesheets.split(','),
  tests       : args.tests.split(','),
  results     : args.results
};

test(options, (err, res) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(res);
});
