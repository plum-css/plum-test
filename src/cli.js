#!/usr/bin/env node

import minimist from 'minimist';
import test from './index.js';

const args    = minimist(process.argv.slice(2));
const options = {
  src: args.src,
  dest: args.dest,
  stylesheets: args.stylesheets.split(',').map(path => path.trim())
};

test(options, (err, res) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(res);
});
