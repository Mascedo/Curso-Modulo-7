function remover(lista,id){
    let verificarArr = lista.find(filmes => filmes.id === id)
    let nArr = lista.filter(filme => filme.id !== id)
    if(!verificarArr){
        console.log('ID de remoção nao encontrado!')
        return;
    }else{
        console.log('Titulo removido!')
        return nArr;
    }

}
module.exports = remover