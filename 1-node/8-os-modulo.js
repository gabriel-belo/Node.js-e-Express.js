const os= require('os')


//Informações sobre usuário atual
const user= os.userInfo() 
console.log(user)

//método que retorna o tempo de atividade do sistema em segundos
console.log(os.uptime())

const currentOS= {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)