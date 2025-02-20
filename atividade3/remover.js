function remover(lista,id){
    let vArr = lista.find(titi => titi.id === id)
    let nArr = lista.filter(titi => titi.id !== id)
    if(!vArr){
        console.log('ID de remoção nao encontrado!')
        return;
    }else{
        console.log('Titulo removido!')
        return nArr;
    }

}
module.exports = remover