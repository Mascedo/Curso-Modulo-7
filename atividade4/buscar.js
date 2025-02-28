function buscar(lista,filtro,tipo){
    if(['nome', 'categoria', 'preco', 'estoque'].includes(filtro)){
        let novoArr = lista.filter(produto => produto[filtro] === tipo)
        if(novoArr.length>0){
            console.log('Produtos com este filtro:')
            novoArr.forEach(produto => {
                console.log('--------------------------')
                console.log(`ID: ${produto.id}`)
                console.log(`Nome: ${produto.nome}`)
                console.log(`Categoria: ${produto.categoria}`)
                console.log(`Preço: ${produto.preco}`)
                console.log(`Estoque: ${produto.estoque}`)
                });
            }
    }else{
        console.log('filtro invalido!')
        return;
}
}
module.exports = buscar