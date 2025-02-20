function lista(l){
    l.forEach(produto => {
        console.log('--------------------------')
        console.log(`ID: ${produto.id}`)
        console.log(`Nome: ${produto.no}`)
        console.log(`Categoria: ${produto.ca}`)
        console.log(`Preco: ${produto.pr}`)
        console.log(`Estoque: ${produto.es}`)
    });
}
module.exports = lista