Node.js: é um ambiente para rodar JavaScript fora do Browser 

Node trabalha o lado do server do app, é lógica pura sem interface

Como fazer para o node avaliar o código:

Conceito de variaveis Globais em node
__dirname -caminho para o diretório atual
__filename -nome do arquivo
require -função para usar modulos(CommonJS)
module - informação sobre o módulo atual (arquivo)
process -processo atual. Informação sobre env onde o programa esta sendo executado


Module os ofere métodos e propriedades para interagir com sistemas operacionais como com o servidor
O os é um modulo built in, ou seja, já esta introduzido no node


NPM
local dependency (Dependência local)= usado somente neste projeto em particular
npm i <packageName>

global dependency (Dependência global)= usado em todos os projetos
npm install -g <packageName>
