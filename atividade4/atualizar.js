function atualizar(lista,id,nome,categoria,preco,estoque){
    let idIndex = lista.findIndex(produto => produto.id === id)
    if(idIndex !== -1&&lista[idIndex].id === id){
        lista[idIndex].nome = nome
        lista[idIndex].categoria = categoria
        lista[idIndex].preco = preco
        lista[idIndex].estoque = estoque
        console.log('Atualizado, use 2 para verificar.')
        return lista;
    }else{
        console.log('ID não encontrado')
    }
}
module.exports = atualizar