"use strict";

var _obj$foo, _obj$foo2, _obj$bar, _obj$bar2, _obj$baz, _obj$baz$nested, _obj$baz2, _obj$baz2$nested, _obj$baz3;

var obj = {
  foo: {
    bar: 'baz'
  },
  bar: {
    foo: 'baz'
  },
  baz: {
    nested: {
      prop: 'foo'
    }
  }
};
var obj2 = {
  hello: 'world'
};
var a = obj === null || obj === void 0 ? void 0 : obj.foo;
var b = obj === null || obj === void 0 ? void 0 : (_obj$foo = obj.foo) === null || _obj$foo === void 0 ? void 0 : _obj$foo.bar;
var c = obj === null || obj === void 0 ? void 0 : (_obj$foo2 = obj.foo) === null || _obj$foo2 === void 0 ? void 0 : _obj$foo2.baz;
var d = obj === null || obj === void 0 ? void 0 : obj.bar;
var e = obj === null || obj === void 0 ? void 0 : (_obj$bar = obj.bar) === null || _obj$bar === void 0 ? void 0 : _obj$bar.foo;
var f = obj === null || obj === void 0 ? void 0 : (_obj$bar2 = obj.bar) === null || _obj$bar2 === void 0 ? void 0 : _obj$bar2.baz;
var g = obj === null || obj === void 0 ? void 0 : obj.baz;
var h = obj === null || obj === void 0 ? void 0 : (_obj$baz = obj.baz) === null || _obj$baz === void 0 ? void 0 : (_obj$baz$nested = _obj$baz.nested) === null || _obj$baz$nested === void 0 ? void 0 : _obj$baz$nested.prop;
var i = obj === null || obj === void 0 ? void 0 : (_obj$baz2 = obj.baz) === null || _obj$baz2 === void 0 ? void 0 : (_obj$baz2$nested = _obj$baz2.nested) === null || _obj$baz2$nested === void 0 ? void 0 : _obj$baz2$nested.prop2;
var j = obj === null || obj === void 0 ? void 0 : (_obj$baz3 = obj.baz) === null || _obj$baz3 === void 0 ? void 0 : _obj$baz3.foo;
var k = obj === null || obj === void 0 ? void 0 : obj.hello;
var l = obj === null || obj === void 0 ? void 0 : obj.world;