function remover(lista,id){
    let verificarArr = lista.find(funcionario => funcionario.id === id)
    let novoArr = lista.filter(funcionario => funcionario.id !== id)
    if(!verificarArr){
        console.log('ID de remoção nao encontrado!')
        return;
    }else{
        console.log('Titulo removido!')
        return novoArr;
    }

}
module.exports = remover