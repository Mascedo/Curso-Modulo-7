function remover(lista,id){
    let verificarArr = lista.find(aluno => aluno.id === id)
    let novoArr = lista.filter(aluno => aluno.id !== id)
    if(!verificarArr){
        console.log('ID de remoção nao encontrado!')
        return;
    }else{
        console.log('Titulo removido!')
        return novoArr;
    }

}
module.exports = remover