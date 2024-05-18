/** Command-line tool to generate Markov text. */
const fs = require('fs')
const axios = require('axios')
const process = require('process');
const myClass = require('./markov.js');



async function webCat(url){
    
    try {
    let res = await axios.get(url)
    new myClass.MarkovMachine(res.data).makeText(process.argv[3])
    }
    catch{
        console.log("Wrong URL please check the URL addres")
    }
}

fs.readFile(process.argv[2], 'utf8', function cat(error,data){
    if(error){
        console.log(error)
        return
    }
   if(data.slice(0,4) === 'http'){
    webCat(data)
   }
   else{
    new myClass.MarkovMachine(data).makeText(process.argv[3])
   }

})

// process[2] = to the file to open and gen text
// precess[3] = to the amount of words want to be generate



