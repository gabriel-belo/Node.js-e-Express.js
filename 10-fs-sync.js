const {readFileSync, writeFileSync}= require('fs')

//Lendo dois arquivos
const firstFile= readFileSync('./content/first.txt', 'utf-8')
const secondFile= readFileSync('./content/second.txt', 'utf-8')

console.log(firstFile, secondFile)

//Criando um arquivo e colocando conteúdo nele
writeFileSync('./content/result-sync.txt',
    `Here is the result: ${firstFile}, ${secondFile}`,
    {flag: "a"}    //Reescrevendo
)


