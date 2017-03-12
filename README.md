# Nested-value

> Get the value from nested object

[![Build Status](https://travis-ci.org/addhome2001/nested-value.svg?branch=master)](https://travis-ci.org/addhome2001/nested-value)
[![Known Vulnerabilities](https://snyk.io/test/github/addhome2001/nested-value/badge.svg)](https://snyk.io/test/github/addhome2001/nested-value)

## Install
```
npm install nested-value
```

## Test

```
npm test
```

## Usage
___Require nested-values___
```js
const nestedValue = require('nested-value');
```

___You can get nested value from an object:___

```js
const nestObj =  { a: { b: { c: "i'm here" } } };

const nestedValue = nestedValue(nestObj, 'a.b.c'); //=> "i'm here"
//or
const nestedValue = nestedValue(nestObj, ['a','b','c']); //=> "i'm here"
```

___Or value inside an nested array___
```js
const nestArray = [[['a'], { b: 'valueB', c: [{ d: 'valueD' }] }]];
const nestedValue = nestedValue(nestArray, '0.1.c.0.d');
// => "valueD"
```

___You can also pass a callback:___
```js
const nestObj =  { a: { b: { c: "i'm here" } } };

const newObject = nestedValue(nestObj, 'a.b.c', function (val){
    return { foo: val }
});
//=> { foo: "i'm here" }

```

## API

### nestedValue(source, structure, [callback])

#### source

Type: `object`

Source object to get nested value.

#### structure

Type: `array` or `string`

- String: separating property by '.' -> `"foo.bar.foo"`
- Array: fill property in normal array -> `[0, "bar", 1]`

#### [callback]

Type: `function`

The callback will trigger after the property is obtained.

- It has one parameter callback(value).

LICENSE
=======

MIT
