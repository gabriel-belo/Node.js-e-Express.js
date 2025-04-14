//O módulo path detecta automaticamente o sistema operacional e ajusta tudo nos bastidores pra você
// O módulo path serve para trabalhar com caminhos de arquivos e diretórios de forma segura e 
// independente do sistema operacional.
const path= require('path')

//Mostra o separador de diretórios do sistema
console.log(path.sep)

// é usada em Node.js para juntar e construir caminhos de diretórios de 
//forma segura e consistente, independentemente do sistema operacional.
//Une vários segmentos de caminho em um caminho completo.
const filePath= path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

//encontrando nome do arquivo
//Extrai apenas o nome do arquivo (a "base") do caminho
const base= path.basename(filePath)
console.log(base)

//caminho completo para o arquivo
//Gera o caminho absoluto do arquivo, a partir do diretório atual (__dirname)
const absolute= path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)