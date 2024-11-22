// Este código é um exemplo de como ler um arquivo de forma assíncrona no Node.js utilizando a 
// API de Promise
const { readFile, writeFile }= require('fs').promises



const start= async() => {
    try{
        const first= await readFile('./content/first.txt', 'utf-8')
        const second= await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} and ${second}`, {flag:'a'})
        console.log(first, second)
    }catch(error){
        console.log(error)
    }
}
start()

// const getText= (path) => {
//     return new Promise((resolve, reject)=> {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }
//         })
//     })
// }


// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err)=> console.log(err))

//Opção 2
// const { readFile, writeFile }= require('fs')
// const util= require('util')

// const readFilePromise= util.promisify(readFile)
// const writeFilePromise= util.promisify(writeFile)


// const start= async() => {
//     try{
//         const first= await readFilePromise('./content/first.txt', 'utf-8')
//         const second= await readFilePromise('./content/second.txt', 'utf-8')
//         await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} and ${second}`)
//         console.log(first, second)
//     }catch(error){
//         console.log(error)
//     }
// }
// start()


//Mesmo função mas utilizando o async/await 
// const readFileAsync = async () => {
//     try {
//         const result = await getText('./content/first.txt');
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// };

// readFileAsync();