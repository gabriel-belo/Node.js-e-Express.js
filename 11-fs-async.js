const { readFile, writeFile }= require('fs')
console.log('start')

//Lendo um arquivo
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){ (parameter) err: NodeJS.ErrnoException
        console.log(err)
        return
    }
    const first= result   
    readFile('./content/second.txt', 'utf-8', (err, result)=> {
        if(err){
            console.log(err)
            return
        }
        const second= result;
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err)
                }
                console.log(result)
            }
        )
    })
})

console.log('done with this task')
console.log('starting the next one')