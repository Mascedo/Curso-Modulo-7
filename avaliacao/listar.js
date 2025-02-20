const prompt = require('prompt-sync')();
function listar(resp,baralhos){
    if(baralhos.length !== 0){
    if(resp===3){
        let cont = 1 
        baralhos.forEach(baralho => {
            console.log(`nome do ${cont}º baralho: ${baralho.no} ID: ${baralho.idB}`)
            cont++
        });
    }else if(resp ===4){
        let cont = 1
        console.log('Lista de flashcards: ')
        baralhos.forEach(baralho => {
            baralho.flash.forEach(flash => {
                console.log(`${cont}º pergunta: ${flash.per} resposta: ${flash.res} ID: ${flash.id} idB: ${flash.idB}`)
                cont++
            });
        });
    }else{
        let idBa = Number(prompt('Id do baralho: '))
        let cont = 1
        let veri = 'false'
        baralhos.forEach(baralho => {
            if(baralho.idB === idBa){
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
}else{
    console.log('Sem nenhum baralho adicionado ou baralho sem flashcard!')
    return;
}
}
module.exports = listar