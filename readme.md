# cross-pwd [![tests](https://github.com/bendrucker/cross-pwd/workflows/tests/badge.svg)](https://github.com/bendrucker/cross-pwd/actions?query=workflow%3Atests)

> Cross platform `PWD` (pathname of the current working directory)


## Install

```
$ npm install --save 
```


## Usage

```js
var pwd = require('cross-pwd')

pwd()
//=> /you/are/here
```

## API

#### `pwd()` -> `string`

Returns the pathname of the process working directory.

## License

MIT © [Ben Drucker](http://bendrucker.me)
