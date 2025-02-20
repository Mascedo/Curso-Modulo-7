const prompt = require('prompt-sync')();
function addFlash(baralhos){
    if(baralhos.length !== 0){
        let idB = Number(prompt('ID do baralho a adicionar: '))
        let veri = 'false'
        baralhos.forEach(baralho => {
            if(baralho.idB === idB){
                let id = Date.now()
                let per = prompt('Pergunta do flashcard: ')
                let res = prompt('Resposta do flashcard: ')
                baralho.flash.push({id,per,res,idB})
                console.log('Flashcard adiconado!')
                veri = 'true'
            }
        });
        if(veri === 'false'){
        console.log('ID de baralho não encontrado!')
        }
    }else{
        console.log('Sem baralhos não é possivel criar flashcards!')
        return
    }
}
module.exports = addFlash