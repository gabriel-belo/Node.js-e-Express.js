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

O que são Promises no JavaScript?

Uma Promise é um objeto no JavaScript que representa uma operação assíncrona que ainda não foi concluída, mas que eventualmente será resolvida ou rejeitada. É como uma promessa no mundo real: você promete fazer algo no futuro, e essa promessa pode ser cumprida (resolvida) ou falhar (rejeitada).
Estados de uma Promise

    Pending (pendente):
        O estado inicial. A Promise ainda está em execução e não foi concluída.

    Fulfilled (resolvida):
        A operação foi concluída com sucesso e a Promise foi resolvida com um valor.

    Rejected (rejeitada):
        A operação falhou e a Promise foi rejeitada com um motivo (um erro ou uma mensagem de rejeição).

    Settled (finalizada):
        A Promise foi resolvida ou rejeitada e não pode mais mudar de estado.


Consumindo uma Promise

    then: Usado para lidar com o sucesso da Promise.
    catch: Usado para lidar com erros ou rejeições.
    finally: Executado independentemente do sucesso ou falha.

    
Função do await no JavaScript

O await é uma palavra-chave que só pode ser usada em funções assíncronas (marcadas com async). Sua função principal é pausar a execução do código até que uma Promise seja resolvida ou rejeitada, permitindo trabalhar com operações assíncronas como se fossem síncronas.

Características do await

    Pausa a execução da função assíncrona:
        Quando await encontra uma Promise, ele espera que ela seja resolvida antes de continuar.
        Enquanto a função espera, outras partes do programa podem continuar executando.

    Retorna o resultado da Promise resolvida:
        Quando a Promise é resolvida com um valor (resolve), o await retorna esse valor.

    Trata erros com simplicidade:
        Se a Promise for rejeitada (reject), você pode capturar o erro com um bloco try/catch.