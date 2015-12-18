# plum-test [![Build Status](https://travis-ci.org/plum-css/plum-test.png?branch=master)](https://travis-ci.org/plum-css/plum-test)

> Build and run visual regression tests against plum stylesheets.


## Dependencies
- [CasperJS](http://casperjs.org/) - 1.1.0+
- [PhantomJS](http://phantomjs.org/) - 1.8.0 < 2.0


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save plum-test`


## Usage

### Node

```javascript
var plumTest = require('plum-test');

var options = {
  src: 'path/to/plum/directory',
  dest: 'path/to/save/results/to',
  stylesheets: ['path/to/compiled/stylesheets'],
};

plumTest(options, function(err, res) {
  if (err) {
    return err;
  }
  return res;
});
```

### CLI

```bash
plum-test
  --src='path/to/plum/directory'
  --dest='path/to/save/results/to'
  --stylesheets='path/to/compiled/stylesheet, path/to/another/compiled/stylesheet'
```

To run only a specific test(s) you can pass a comma `,` seperated list of paths to the the `--tests`.

```bash
plum-test
  --src='path/to/plum/directory'
  --dest='path/to/save/results/to'
  --stylesheets='path/to/compiled/stylesheet, path/to/another/compiled/stylesheet'
  --tests='path/to/plum/directory/modules/module-one' # only test the module-one module.
```

## API

### test( options )

Name                | Type            | Argument     | Description
--------------------|-----------------|--------------|------------
options.src         | `string`        | `<required>` | the src path to your plum stylesheets.
options.dest        | `string`        | `<required>` | the path to save the test results to.
options.stylesheets | `array|string`  | `<required>` | the paths to your compiled css stylesheets.
options.tests       | `array|string`  | `<optional>` | the paths to the tests to be run.

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
