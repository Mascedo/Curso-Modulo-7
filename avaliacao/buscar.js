const prompt = require('prompt-sync')();
function buscar(baralhos){

    let esc = Number(prompt('Oque busca 1.Por pergunta, 2.ID de baralho: '))

    if(esc===1){
        let ver = 'false'
        let perg = prompt('Pergunta do flashcard: ').toLowerCase().trim()
        baralhos.forEach(baralho => {
            baralho.flash.forEach(flash => {
                if(flash.per.toLowerCase().trim() === perg){
                    console.log('Achado!')
                    console.log(flash)
                    ver = 'true'
                }
            });
        }); 
        if(ver === 'false'){
            console.log('Pergunta nao encontarda!')
        }
    }else{
        let idBa = Number(prompt('Id do baralho: '))
        let cont = 1
        let veri = 'false'
        baralhos.forEach(baralho => {
            if(baralho.idB === idBa){
                console.log(baralho.no+':')
                baralho.flash.forEach(flash => {
                    console.log(`${cont}º pergunta: ${flash.per} resposta: ${flash.res} ID: ${flash.id} idB: ${flash.idB}`)
                    cont++
                    veri = 'true'
                });
            }
        });
        if(veri === 'false'){
            console.log('ID nao encontrado ou sem flashcards!')
        }
    }
}
module.exports = buscar 