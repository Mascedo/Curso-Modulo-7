function lista(l){
    l.forEach(produto => {
        console.log('--------------------------')
        console.log(`ID: ${produto.id}`)
        console.log(`Nome: ${produto.nome}`)
        console.log(`Categoria: ${produto.categoria}`)
        console.log(`Preco: ${produto.preco}`)
        console.log(`Estoque: ${produto.estoque}`)
    });
}
module.exports = lista