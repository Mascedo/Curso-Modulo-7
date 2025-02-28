function remover(lista,id){
    let verificarArr = lista.find(produto => produto.id === id)
    if(!verificarArr){
        console.log('ID de remoção nao encontrado!')
        return;
    }else{
        let novoArr = lista.filter(produto => produto.id !== id)
        console.log('Titulo removido!')
        return novoArr;
    }

}
module.exports = remover