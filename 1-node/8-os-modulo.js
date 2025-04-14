//O módulo os serve para obter informações sobre o sistema operacional onde o código está rodando. 
// Ele é muito útil quando você quer que seu app seja mais dinâmico e adaptável ao ambiente, 
// como durante a instalação de pacotes, configuração de caminhos, ou até para monitorar 
// recursos do sistema.
const os= require('os')


//Informações sobre usuário atual
const user= os.userInfo() 
console.log(user)

//método que retorna o tempo de atividade do sistema em segundos
console.log(`Tempo de atividade do sistema ${os.uptime()} segundos`)


const currentOS= {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)