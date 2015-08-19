# plum-test [![Build Status](https://travis-ci.org/plum-css/plum-test.png?branch=master)](https://travis-ci.org/plum-css/plum-test)

> Build and run visual regression tests against plum stylesheets.

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

## API

### test( options )

Name                | Type            | Argument     | Description
--------------------|-----------------|--------------|------------
options.src         | `string`        | `<required>` | the src path to your plum stylesheets.
options.dest        | `string`        | `<required>` | the path to save the test results to.
options.stylesheets | `array|string`  | `<required>` | the path to your compiled css stylesheets.

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
