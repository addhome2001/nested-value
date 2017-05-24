/*!
 * nested-value <https://github.com/addhome2001/nested-value>
 *
 * Copyright (c) 2016 addhome2001, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var nested = require('./');

describe('nested-values', function () {
  it('value in one level', function () {
    var defaultObj = { a: 'a', b: 'b' };
    var actual = nested(defaultObj, 'a');

    expect(actual).to.eql('a');
  });

  it('passing an array', function () {
    var defaultObj = { a: { b: { c: "'i'm here" } } };
    var exp = "'i'm here";
    var actual = nested(defaultObj, ['a', 'b', 'c']);

    expect(actual).to.equal(exp);
  });

  it('five level', function () {
    var nestObj = { a: { b: { c: { d: { e: { f: "i'm here" } } } } } };
    var actual = nested(nestObj, 'a.b.c.d.e.f');

    expect(actual).to.eql("i'm here");
  });

  it('in the specific level', function () {
    var nestObj = { a: { b: { c: { d: { e: { f: "i'm here" } } } } } };
    var exp = { e: { f: "i'm here" } };
    var actual = nested(nestObj, 'a.b.c.d');

    expect(actual).to.eql(exp);
  });

  it('in the specific property', function () {
    var nestObj = { a: { b: { c: 'valueC', d: 'valueD', e: 'valueE' } } };
    var exp = 'valueD';
    var actual = nested(nestObj, 'a.b.d');

    expect(actual).to.eql(exp);
  });

  it('get the value of array', function () {
    var nestObj = ['a', 'b', { c: 'ValueC' }];
    var exp = 'ValueC';
    var actual = nested(nestObj, [2, 'c']);

    expect(actual).to.eql(exp);
  });

  it('get the value of nested array', function () {
    var nestObj = [[['a'], { b: 'valueB', c: [{ d: 'valueD' }] }]];
    var exp = 'valueD';
    var actual = nested(nestObj, '0.1.c.0.d');

    expect(actual).to.eql(exp);
  });

  it('return the new object by callback', function () {
    var nestObj = { a: { b: { c: "i'm here" } } };
    var exp = { newProperty: "i'm here" };
    var actual = nested(nestObj, 'a.b.c', function (val) {
      return { newProperty: val };
    });

    expect(actual).to.eql(exp);
  });

  it('return the new object by callback', function () {
    var nestObj = { a: { b: { c: [1, 2, 3] } } };
    var exp = [2, 4, 6];
    var actual = nested(nestObj, 'a.b.c', function (val) {
      return val.map(function (num) {
        return num * 2;
      });
    });

    expect(actual).to.have.members(exp);
  });

  it('except Array', function () {
    var defaultObj = { a: 'a', b: 'b' };
    var actual = function () {
      nested(defaultObj, 123);
    };

    expect(actual).to.throw(TypeError, /The second arguments is not Array or String./);
  });
});
