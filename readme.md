# logical-operators

> A tiny library that abstracts away logical operators with the intention of improving code readability. Ideal for using it against arrays.

[![Build Status](https://travis-ci.org/AlvaroBernalG/logical-operators.svg?branch=master)](https://travis-ci.org/AlvaroBernalG/logical-operators) [![npm version](https://badge.fury.io/js/logical-operators.svg)](https://badge.fury.io/js/logical-operators)


## Install
```
$ npm install logical-operators --save
```

## Usage

### every
```js
const { every } = require('logical-operators')
const is = require('library-that-validate-stuff')


const doSomethingAwesome = (...args) =>{

  const number_singleDigit_and_natural = every(
        is.number, 
        is.singleDigit, 
        is.natural
      )

  if (values.every(number_singleDigit_and_natural)){
    //=> yay!!
  }else{
    //=> throw error
  }
}

doSomethingAwesome(1, 9, 7)
```

Or maybe you want to filter an array of values against conditions:
```js
const { every } = require('logical-operators')
const is = require('library-that-validate-stuff')

const values = [1, 9, 7, 'Venezuela', 'hola', 10, undefined]

const number_singleDigit_and_natural = every(
      is.number, 
      is.singleDigit, 
      is.natural
    )

values.filter(number_singleDigit_and_natural) // => [1, 9, 7, 10]
```

### or

```js
const { or } = require('logical-operators')
const is = require('library-that-validate-stuff')

const values = [1,2,'three']

const string_or_number = or(is.string, is.number)

values.every(string_or_number) // => true

values.filter(string_or_number) // => [1, 2, 'three']

```

### both

```js
const { both } = require('logical-operators')
const is = require('library-that-validate-stuff')

const values = ['a','b','two']

const string_and_number = both(is.string, is.singleChar)

values.every(string_and_number) // => false

values.filter(string_and_number) // => ['a','b']

```

### some

```js
const { both } = require('logical-operators')
const is = require('library-that-validate-stuff')

const values = ['a','b','two', 3]

const string_and_number = some(is.string, is.singleChar, is.number)

values.every(string_and_number) // => true

values.filter(string_and_number) // => ['a','b', 3]

```

## License

MIT © [Alvaro Bernal](https://github.com/AlvaroBernalG/) 
