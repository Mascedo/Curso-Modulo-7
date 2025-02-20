const prompt = require('prompt-sync')();
function atualizar(resp,baralhos){
    if(resp === 6){
        let veri = 'false'
        let idB = Number(prompt('ID do baralho a atualizar: '))
        baralhos.forEach(baralho => {
            if(baralho.idB === idB){
                let nName = prompt('Novo titulo de baralho: ')
                baralho.no = nName
                console.log('Titulo atualizado!')
                veri = 'true'
            }
        });
        if(veri === 'false'){
            console.log('ID de baralho nao encontrado!')
        }
    }else{
        let veri = 'false'
        let id = Number(prompt('ID do flashcar a atualizar: '))
        baralhos.forEach(baralho => {
            baralho.flash.forEach(flash => {
                if(flash.id === id){
                    let nPer = prompt('Novo pergunta de flashcard: ')
                    let nRes = prompt('Nova resposta de flashcard: ')
                    flash.per = nPer
                    flash.res = nRes
                    console.log('Flashcard atualizado!')
                    veri = 'true'
                }
            });
        });
        if(veri === 'false'){
            console.log('ID de baralho nao encontrado!')
        }
    }
}
module.exports = atualizar