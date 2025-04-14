//O módulo fs (de File System) permite ler, escrever, deletar, renomear, copiar arquivos e 
//pastas no disco

//formas diferentes de acessar os métodos
//1. Mais útli quando vai utilizar poucos métodos
const {readFileSync, writeFileSync} = require('fs')

//2.util quando vários métodos do módulo forem aplicados
//const fs= require('fs')
//fs.read

const first= readFileSync('./content/first.txt', 'utf8')
const second= readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

writeFileSync('./content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'} //você acrescenta (anexa) ao conteúdo existente

)

const terceiro= readFileSync('./content/result-sync.txt', 'utf8')

console.log(terceiro)


console.log('done with this task')
console.log('starting the next one')


