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
npm uninstall <PackageName> para desisntalar o pacote

global dependency (Dependência global)= usado em todos os projetos
npm install -g <packageName>

-D ou --save-dev: Especifica que o pacote será instalado como uma dependência de desenvolvimento (devDependency). Isso significa que o pacote será listado no campo devDependencies do arquivo package.json e será usado apenas durante o desenvolvimento, não em produção.



Essas linhas no arquivo package.json configuram um script para facilitar a execução de comandos relacionados ao seu projeto Node.js. Vamos detalhar:
Estrutura e Significado

    "scripts":
        Este é o campo do package.json onde você define scripts personalizados que podem ser executados usando npm run.

    "start":
        É o nome do script. start é um nome especial, porque pode ser executado diretamente com npm start (sem precisar escrever run, como em outros scripts).
        Por padrão, em projetos Node.js, o script "start" é usado para iniciar o servidor ou a aplicação.

    "node app.js":
        É o comando que será executado quando você rodar npm start.
        Nesse caso, ele usa o Node.js para executar o arquivo app.js, que normalmente contém o código principal do servidor ou da aplicação.


O nodemon atualiza de forma instantanea sem fazer com que seja necessário chamar toda vez
que temos uma mudança como quando usamos o node <NomeArquivo>