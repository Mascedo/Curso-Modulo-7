function remover(lista,id){
    let verificarArr = lista.find(filme => filme.id === id)
    let novoArr = lista.filter(filme => filme.id !== id)
    if(!verificarArr){
        console.log('ID de remoção nao encontrado!')
        return;
    }else{
        console.log('Titulo removido!')
        return novoArr;
    }

}
module.exports = remover