
var math =require( './math.js');
var app={
doAdd  :function (a, b) { math.add(a, b)},
doSubtract : (a, b) => math.subtract(a, b),
 doMultiply : (a, b) => math.multiply(a, b),
 doDivide   : (a, b) => math.divide(a, b)};
module.exports=app;