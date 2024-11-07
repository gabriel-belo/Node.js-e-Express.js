//modules- Código encapsulado
const names= require("./4-names.js");
const say = require("./5-utils.js");
const data= require('./6-alternative-flavor')


console.log(data)

console.log(names)
console.log(names.john)
console.log(names.jane)

say.sayHi('susan');
say.sayHi(names.john);
say.sayBy(names.jane);