const prompt = require('prompt-sync')();
function addBara(baralhos){
    let idB = Date.now()
    let no = prompt('Nome do baralho: ')
    let flash = []
    baralhos.push({idB,no,flash})
    console.log('Adicionado! \nidB: '+idB)
    
    return;
}
module.exports = addBara