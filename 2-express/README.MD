Express foi feito para desenvolver websites, web apps e apis de forma mais rápida e fácil

Oq é um middleware no express?
é uma função que tem acesso aos objetos da requisição (req) e resposta (res), além da função next , que permite passar o controle para o próximo middleware na pilha. Ele é usado para realizar tarefas:
-Modificar a requisição ou resposta
-Validar ou autenticar o usuário
-Registrar logs
-Lidar com erros

middleware pode modificar os dados ou objetos das requisições (req) e respostas (res). Essa é uma das principais funções dos middlewares no Express: permitir que você manipule as informações antes de continuar o fluxo de execução, seja para validar, transformar, autenticar ou adicionar novos dados.

Um middleware é uma função que intercepta o fluxo de uma requisição no servidor. Ele pode ser usado para:

    -Adicionar ou modificar informações na requisição (req).
    -Alterar ou configurar a resposta (res).
    -Executar lógica personalizada, como validações, autenticações ou logging.
    -Encerrar o ciclo de requisição e resposta ou passar o controle adiante usando a função next().

Método all do express
O método all é usado para definir um middleware que será executado para todas as requisições

O Express processa middlewares na ordem em que eles são definidos. Um app.all pode ser posicionado em qualquer lugar da pilha para aplicar lógica antes ou depois de rotas específicas.

O método all é útil quando você precisa:

    Aplicar lógica a todas as requisições de uma rota, independente do método HTTP.
    Definir middlewares específicos para grupos de rotas.
    Implementar comportamentos comuns, como autenticação, validação ou registro de logs.


Os métodos como all, get, post, put, e delete no Express podem ser considerados como uma forma de configurar middlewares para rotas específicas, com a diferença de que eles também são usados para tratar diretamente requisições HTTP.

Esses métodos, ao serem definidos, configuram middlewares de rota que lidam com requisições de tipos específicos (GET, POST, etc.) ou, no caso de all, para todos os métodos HTTP.
Por que são middlewares?

No Express, a definição de uma rota segue o mesmo padrão de um middleware:

    Tem acesso aos objetos da requisição (req) e da resposta (res).
    Pode modificar a requisição ou resposta.
    Pode encerrar o ciclo com res.send() ou delegar a execução ao próximo middleware/rota usando next().


Diferenças entre métodos de rota e middleware tradicional

    Métodos de rota (get, post, etc.):
        São específicos para um método HTTP ou para todos os métodos (all).
        Geralmente, lidam com o processamento final da requisição e envio da resposta.

    Middleware tradicional (app.use):
        Não é vinculado a um método HTTP específico, mas pode ser aplicado a um conjunto de rotas.
        Focado em modificar/validar a requisição antes que ela chegue a um manipulador de rota ou outro middleware.   
Os métodos join e resolve do módulo path no Node.js servem para manipular e construir caminhos de arquivos ou diretórios de forma consistente, independentemente do sistema operacional (Windows, Linux, macOS). Ambos ajudam a lidar com as diferenças na estrutura de caminhos (como separadores de diretórios) de maneira confiável.
1. path.join()

Constrói um caminho concatenando os segmentos fornecidos como argumentos, respeitando os separadores de diretórios do sistema operacional.
Funcionamento:

    Junta os segmentos do caminho fornecidos.
    Normaliza o caminho resultante (remove redundâncias como ../ e ./).

Sintaxe:

const path = require('path');
path.join(...segments);

Exemplo 1: Juntando caminhos

const path = require('path');

const caminho = path.join('diretorio', 'subdiretorio', 'arquivo.txt');
console.log(caminho); // 'diretorio/subdiretorio/arquivo.txt' (Linux/macOS)
// No Windows: 'diretorio\subdiretorio\arquivo.txt'

Exemplo 2: Normalização

const caminho = path.join('diretorio', '..', 'outroDiretorio', './arquivo.txt');
console.log(caminho); // 'outroDiretorio/arquivo.txt'

    .. remove um nível do caminho.
    ./ é ignorado.

2. path.resolve()

Constrói um caminho absoluto a partir dos segmentos fornecidos. Ele:

    Começa com o diretório atual (process.cwd()) ou com o caminho mais próximo absoluto encontrado nos argumentos.
    Resolve os segmentos para criar o caminho final.

Funcionamento:

    Considera os segmentos como componentes que podem conter caminhos relativos ou absolutos.
    Se encontrar um segmento absoluto no meio dos argumentos, descarta os anteriores.

Join e resolve do módulo path
Os métodos join e resolve do módulo path no Node.js servem para manipular e construir caminhos de arquivos ou diretórios de forma consistente, independentemente do sistema operacional

Os métodos join e resolve do módulo path no Node.js servem para manipular e construir caminhos de arquivos ou diretórios de forma consistente, independentemente do sistema operacional (Windows, Linux, macOS). Ambos ajudam a lidar com as diferenças na estrutura de caminhos (como separadores de diretórios) de maneira confiável.

1. path.join()

Constrói um caminho concatenando os segmentos fornecidos como argumentos, respeitando os separadores de diretórios do sistema operacional.
Funcionamento:

    Junta os segmentos do caminho fornecidos.
    Normaliza o caminho resultante (remove redundâncias como ../ e ./).

path.join():
-Referência inicial:	Não considera o diretório atual	
-Construção do caminho	Junta segmentos respeitando separadores	
-Uso principal:	Construção de caminhos relativos	


path.resolve():
-Referência inicial:Considera o diretório atual (ou caminho absoluto encontrado nos segmentos)
-Construção do caminho: Gera um caminho absoluto
-Uso principal: Obtenção de caminhos absolutos


1. Caminho Absoluto

Um caminho absoluto especifica a localização completa de um arquivo ou diretório, começando pela raiz do sistema de arquivos. Ele é independente do diretório de trabalho atual (onde o programa está sendo executado) e sempre leva diretamente ao recurso.
Sempre aponta para o mesmo local, independentemente do diretório onde o programa está rodando.


2. Caminho Relativo

Um caminho relativo especifica a localização de um arquivo ou diretório em relação ao diretório de trabalho atual (o diretório onde o programa está sendo executado). Ele é dependente do contexto de execução.

Características:

    Não começa com uma barra / (Linux/macOS) ou com C:\ (Windows).
    Pode usar:
        . para referenciar o diretório atual.
        .. para subir um nível na hierarquia de diretórios.


Caminhos Relativos e Caminhos Absolutos



Trabalhando com caminhos relativos e absolutos:

Usando path.join: Combina segmentos de caminho relativo ou absoluto.

const path = require('path');
const filePath = path.join('subdir', 'arquivo.txt');
console.log(filePath); // 'subdir/arquivo.txt'

Usando path.resolve: Transforma um caminho relativo em absoluto, baseado no diretório atual.

    const absolutePath = path.resolve('subdir', 'arquivo.txt');
    console.log(absolutePath); // Exemplo: /home/usuario/projeto/subdir/arquivo.txt



Resumo

    Caminho Absoluto:
        Sempre aponta diretamente para um local fixo, independentemente do local de execução.
        Ideal para configurações globais ou caminhos críticos.
    Caminho Relativo:
        Depende do local onde o programa está rodando.
        Útil para projetos onde os arquivos estão organizados em relação ao diretório do programa.


*Os segmentos em caminhos relativos e absolutos são as partes individuais que compõem um caminho
Cada segmento representa um diretório, subdiretório ou arquivo dentro do sistema de arquivos, separados por um caractere delimitador (como / em Linux/macOS ou \ no Windows).

Segmentos em Caminhos Absolutos

    Caminhos absolutos sempre começam na raiz do sistema de arquivos.
    Cada segmento descreve um ponto específico na hierarquia de diretórios, desde a raiz até o destino final.

Segmentos em Caminhos Relativos

    Caminhos relativos são construídos com base no diretório de trabalho atual (cwd) e também são compostos por segmentos.
    Podem incluir símbolos especiais como:
        . (diretório atual).
        .. (diretório pai).

    
O método static()
O método express.static() serve para configurar uma pasta como fonte de arquivos estáticos na aplicação Express. Assim, qualquer recurso dentro dessa pasta pode ser acessado diretamente pelo navegador, sem precisar de rotas específicas.


O que são Arquivos Estáticos?

Arquivos estáticos são recursos no servidor que não mudam dinamicamente durante sua entrega ao cliente. Eles são criados previamente e servidos diretamente para o navegador ou aplicativo cliente, sem nenhum processamento ou geração adicional no backend no momento da solicitação.
Exemplos Comuns de Arquivos Estáticos:

    CSS: Arquivos de estilo usados para formatar páginas.
    JavaScript (Frontend): Scripts que rodam no navegador.
    Imagens: Como .jpg, .png, .gif, ou .svg.
    Fontes: Arquivos de tipografia, como .ttf, .woff, ou .otf.
    HTML Estático: Páginas HTML fixas que não dependem de dados dinâmicos.
    Documentos: Arquivos como .pdf ou .txt.

Características dos Arquivos Estáticos

    Imutáveis:
        O conteúdo desses arquivos não muda entre diferentes solicitações.
        Por exemplo, um arquivo style.css terá sempre o mesmo conteúdo para todos os usuários.

    Cacheáveis:
        Como o conteúdo é fixo, arquivos estáticos podem ser armazenados em cache (no navegador ou em CDNs), melhorando a performance.

    Servidos Diretamente:
        Geralmente são entregues ao cliente sem processamento adicional no servidor, tornando a entrega rápida.

2. Arquivos Dinâmicos

    Exemplos:
        HTML renderizado no backend (index.ejs, página.handlebars).
        JSON gerado por APIs.
    Uso:
        Para conteúdos que mudam com base no contexto, como informações personalizadas ou dados de um banco.
    Entrega:
        São gerados ou processados no servidor antes de serem enviados.
    Ferramentas:
        Frameworks como Express, Django ou Laravel.
        Templates dinâmicos como EJS, Pug, ou Handlebars.



app.use() no Express
O método use() no Express é usado para registrar middlewares em uma aplicação. Um middleware é uma função que executa tarefas específicas, como:

    Manipulação de requisições e respostas.
    Execução de lógica personalizada antes de passar o controle para o próximo middleware ou rota.


API vs SSR

API:
-API - JSON
-SEND DATA
-RES.JSON()

SSR:
-SSR - Template
-SEND Template
-RES.RENDER()

Em express ou em http quando falamos sobre api estamos falando sobre configurar uma interface http para interagir com os dados 
Os dados são enviados usando json, para enviar a resposta usaremos res.json()
A ideia principal com apis é que o servidor provem dados e isso significa que qualquer aplicativo front-end que deseja acessar esses dados pode simplismente usar uma requisição http r

SSR(service side randering) configuraremos modelos e enviaremos de volta o HTML, CSS e JavaScript inteiro, e faremos isso usando o método res.render


Adicionar /:id na URL (como em /user/:id) é uma forma de definir parâmetros de rota em frameworks ou bibliotecas de roteamento, como o React Router, Express.js, ou outras ferramentas de desenvolvimento web. Esses parâmetros permitem que partes da URL sejam dinâmicas e possam receber valores variáveis.
Funcionalidade de /:id

    Define um Segmento Dinâmico na URL O :id funciona como um "placeholder" para valores que serão passados na URL. Por exemplo:
        Se a rota é definida como /user/:id, você pode acessar URLs como /user/123, /user/abc, etc.

    Captura o Valor do Parâmetro O valor correspondente ao :id pode ser capturado no backend (como no Express.js) ou no frontend (como no React Router) para usá-lo em lógica de negócio, consultas a banco de dados, exibição de dados dinâmicos, etc.

    Após uma ? como nesta estrutura http://hn.algolia.com/api/v1/search?query=foo&tags=story
    A ? e o conteúdo que vem após ela formam a query string, que é usada para enviar dados ou parâmetros ao servidor em uma requisição HTTP.

    Componentes da Query String

    A Interrogação (?)
        Indica o início da query string. Tudo que vem depois dela são os parâmetros que o cliente está enviando para o servidor.

    Parâmetros (Key-Value Pairs)
        Os parâmetros são fornecidos no formato chave=valor e separados por &.
        No exemplo:
            query=foo: Define o valor foo para a chave query.
            tags=story: Define o valor story para a chave tags.

    Separador (&)
        Separa múltiplos parâmetros dentro da query string. No exemplo, query=foo e tags=story estão separados pelo &.

    Exemplo: Pesquisa de Palavras http://example.com/search?term=javascript&limit=10
    Busca por "javascript" e limita os resultados a 10.

    Resumo: A query string é uma forma de passar parâmetros para o servidor em uma URL. No exemplo fornecido, ela define critérios para buscar conteúdos relacionados ao termo foo que possuem a tag story. É amplamente usada em APIs, sistemas de busca, e filtros dinâmicos.