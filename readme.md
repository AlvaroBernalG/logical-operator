# logical-operators

> A tiny library that abstracts away logical operators with the intention of improving code readability.

[![Build Status](https://travis-ci.org/AlvaroBernalG/logical-operators.svg?branch=master)](https://travis-ci.org/AlvaroBernalG/logical-operators) [![npm version](https://badge.fury.io/js/logical-operators.svg)](https://badge.fury.io/js/logical-operators)


## Install
```
$ npm install logical-operators
```


## Usage

```js

const {or, some, every } = require('logical-operators')

const values = [1, 9, 7]

const number_singleDigit_and_natural = every(
      is.number, 
      is.singleDigit, 
      is.natural
    )

values.every(number_singleDigit_and_natural) // => true


if (values.every(number_singleDigit_and_natural)){
  //=> yay!!
}

```


## License

MIT © [Alvaro Bernal](https://github.com/AlvaroBernalG/) 
