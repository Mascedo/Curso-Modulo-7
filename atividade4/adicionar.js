function adicionar(lista,nome,categoria,preco,estoque){
    let id = Date.now()
    lista.push({id,nome,categoria,preco,estoque})
}
module.exports = adicionar