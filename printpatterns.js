const prompt = require('prompt')

let pra = () => {
    prompt.start()
    prompt
    .get ({
        properties: {
            word: {
                description: 'Enter the letter or number u want to make pattern of'

            },
            hello :{
                description: 'Enter the number of times u want to print'
            }
        },
})
.catch((err) => {
    console.log('An error')
})
.then((res) => {

    let string = '';
    for(let i = 0; i <res['hello'] ; i++){   
        for(let k = 0; k < i; k++){
        string += res['word'];
        }
         string += '\n';
    }
    console.log(string)
})
}

pra()


