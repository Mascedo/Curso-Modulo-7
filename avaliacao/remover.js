const prompt = require('prompt-sync')();
function remover(resp,baralhos){
    if(baralhos.length>0){
    if(resp === 8){
        idBR = Number(prompt('ID do baralho para remoção: '))
        let ver = baralhos.find(baralho => baralho.idB === idBR)
        if(ver){
            console.log('Baralho removido!')
            baralhos = baralhos.filter(baralho => baralho.idB !== idBR)
            return baralhos;
        }else{
            console.log('ID de baralho nao encontrado!')
            return baralhos;
        }
    }else{
        idFR = Number(prompt('ID do flashcard para remoção: '))
            let find = baralhos.find(baralho => baralho.flash.some(flash => flash.id === idFR))
            if(find){
                find.flash = find.flash.filter(flash => flash.id !== idFR)
                console.log('Flashcard removido!')
            }else{
                console.log('ID de flashcard nao encontrado!')
            }
        return baralhos
    }
}else{
    console.log('Sem baralhos adicionados!')
    return baralhos
}
}
module.exports = remover