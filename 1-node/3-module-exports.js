// MODULES
//CommonJS, todo arquivo é um modulo(por padrão)
//Modulos- Código encapsulado(só compartilha o mínimo, serve para proteger e esconder os 
//dados internos de um objeto)

const names= require('./4-names.js')
const funcoes= require('./5-utils.js')

funcoes.sayHi(names.john)

console.log(names)