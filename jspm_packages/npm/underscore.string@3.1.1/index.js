/* */ 
'use strict';
function s(value) {
  if (!(this instanceof s))
    return new s(value);
  this._wrapped = value;
}
s.VERSION = '3.1.1';
s.isBlank = require('./isBlank');
s.stripTags = require('./stripTags');
s.capitalize = require('./capitalize');
s.decapitalize = require('./decapitalize');
s.chop = require('./chop');
s.trim = require('./trim');
s.clean = require('./clean');
s.count = require('./count');
s.chars = require('./chars');
s.swapCase = require('./swapCase');
s.escapeHTML = require('./escapeHTML');
s.unescapeHTML = require('./unescapeHTML');
s.splice = require('./splice');
s.insert = require('./insert');
s.replaceAll = require('./replaceAll');
s.include = require('./include');
s.join = require('./join');
s.lines = require('./lines');
s.dedent = require('./dedent');
s.reverse = require('./reverse');
s.startsWith = require('./startsWith');
s.endsWith = require('./endsWith');
s.pred = require('./pred');
s.succ = require('./succ');
s.titleize = require('./titleize');
s.camelize = require('./camelize');
s.underscored = require('./underscored');
s.dasherize = require('./dasherize');
s.classify = require('./classify');
s.humanize = require('./humanize');
s.ltrim = require('./ltrim');
s.rtrim = require('./rtrim');
s.truncate = require('./truncate');
s.prune = require('./prune');
s.words = require('./words');
s.pad = require('./pad');
s.lpad = require('./lpad');
s.rpad = require('./rpad');
s.lrpad = require('./lrpad');
s.sprintf = require('./sprintf');
s.vsprintf = require('./vsprintf');
s.toNumber = require('./toNumber');
s.numberFormat = require('./numberFormat');
s.strRight = require('./strRight');
s.strRightBack = require('./strRightBack');
s.strLeft = require('./strLeft');
s.strLeftBack = require('./strLeftBack');
s.toSentence = require('./toSentence');
s.toSentenceSerial = require('./toSentenceSerial');
s.slugify = require('./slugify');
s.surround = require('./surround');
s.quote = require('./quote');
s.unquote = require('./unquote');
s.repeat = require('./repeat');
s.naturalCmp = require('./naturalCmp');
s.levenshtein = require('./levenshtein');
s.toBoolean = require('./toBoolean');
s.exports = require('./exports');
s.escapeRegExp = require('./helper/escapeRegExp');
s.strip = s.trim;
s.lstrip = s.ltrim;
s.rstrip = s.rtrim;
s.center = s.lrpad;
s.rjust = s.lpad;
s.ljust = s.rpad;
s.contains = s.include;
s.q = s.quote;
s.toBool = s.toBoolean;
s.camelcase = s.camelize;
s.prototype = {value: function value() {
    return this._wrapped;
  }};
function fn2method(key, fn) {
  if (typeof fn !== "function")
    return;
  s.prototype[key] = function() {
    var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));
    var res = fn.apply(null, args);
    return typeof res === 'string' ? new s(res) : res;
  };
}
for (var key in s)
  fn2method(key, s[key]);
fn2method("tap", function tap(string, fn) {
  return fn(string);
});
function prototype2method(methodName) {
  fn2method(methodName, function(context) {
    var args = Array.prototype.slice.call(arguments, 1);
    return String.prototype[methodName].apply(context, args);
  });
}
var prototypeMethods = ["toUpperCase", "toLowerCase", "split", "replace", "slice", "substring", "substr", "concat"];
for (var key in prototypeMethods)
  prototype2method(prototypeMethods[key]);
module.exports = s;
