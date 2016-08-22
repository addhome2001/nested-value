# Nested-value

> Get the value from nested object

[![Build Status](https://travis-ci.org/emn178/js-md5.svg?branch=master)](https://travis-ci.org/emn178/js-md5)

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

const newObject = nestedValue('a.b.c'); //=> "i'm here"
//or
const newObject = nestedValue(['a','b','c']); //=> "i'm here"
```

___You can also pass a callback:___
```js
const nestObj =  { a: { b: { c: "i'm here" } } };

const newObject = nestedValue('a.b.c', function (val){
    return { foo: val }
}); //=> { foo: "i'm here" }

```

## API

### nestedValue(source, structure, [callback])

#### source

Type: `object`

Source object to get nested value.

#### structure

Type: `array` or `string`

- String: separating property by '.' -> `"foo.bar.foo"`
- Array: fill property in normal array -> `["foo", "bar", "foo"]`

#### [callback]

Type: `function`

The callback will trigger after the property is obtained.

- It has one parameter callback(value).

LICENSE
=======

MIT
