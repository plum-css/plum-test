# plum-test [![Build Status](https://travis-ci.org/plum-css/plum-test.png?branch=master)](https://travis-ci.org/plum-css/plum-test)

> Build and run visual regression tests against plum stylesheets.

## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save plum-test`


## Usage

```javascript
var test = require('plum-test');

var options = {
  base: 'path/to/your/plum/stylesheets',
  stylesheets: 'path/to/your/compiled/css/stylesheets',
  tests: [ 'modules/', 'units/', 'pages/' ],
  results: 'path/to/save/results/to',
};

test(options, function(err, response) {
  if (err) {
    return err;
  }
  return response;
});
```


## API

### test( options )

Name                | Type     | Argument     | Description
--------------------|----------|--------------|------------
options.base        | `string` | `<required>` | the base path to your plum stylesheets.
options.stylesheets | `array`  | `<required>` | the path to your compiles css stylesheets.
options.tests       | `array`  | `<required>` | files and/or directories containing the tests to run.
options.results     | `string` | `<required>` | the path to save the test results to.

#### callback( error, response )

Name     | Type       | Argument     | Description
---------|------------|--------------|------------
error    | `error`    | `<required>` | any errors that may have occured.
response | `string`   | `<required>` | success message.


## Developing

[plum-test](https://github.com/plum-css/plum-test) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
