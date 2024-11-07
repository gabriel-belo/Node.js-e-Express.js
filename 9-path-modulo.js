const path= require('path')

console.log(path.sep)

// é usada em Node.js para juntar e construir caminhos de diretórios de 
//forma segura e consistente, independentemente do sistema operacional.
const filePath= path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

//encontrando nome do arquivo
const base= path.basename(filePath)
console.log(base)

//caminho completo para o arquivo
const absolute= path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)