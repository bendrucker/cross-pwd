#  [![Build Status](https://travis-ci.org/bendrucker/.svg?branch=master)](https://travis-ci.org/bendrucker/) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/cross-pwd.svg)](https://greenkeeper.io/)

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
