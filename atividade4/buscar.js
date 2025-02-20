function buscar(lista,cont,tipo){
    if(['no', 'ca', 'pr', 'es'].includes(cont)){
        let nArr = lista.filter(rr => rr[cont] === tipo)
        if(nArr.length>0){
            console.log('Produtos com este filtro:')
            nArr.forEach(produto => {
                console.log('--------------------------')
                console.log(`ID: ${produto.id}`)
                console.log(`Nome: ${produto.no}`)
                console.log(`Categoria: ${produto.ca}`)
                console.log(`Preço: ${produto.pr}`)
                console.log(`Estoque: ${produto.es}`)
                });
            }
    }else{
        console.log('filtro invalido!')
        return;
}
}
module.exports = buscar