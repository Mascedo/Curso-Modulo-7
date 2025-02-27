function buscar(lista,select,tipo){
    if(['titulo', 'autor', 'ano', 'genero'].includes(select)){
        let novoArr = lista.filter(livros => livros[select] === tipo)
        if(novoArr.length>0){
            console.log('Livros com este filtro:')
            novoArr.forEach(livro => {
                console.log('--------------------------')
                console.log(`ID: ${livro.id}`)
                console.log(`Titulo: ${livro.titulo}`)
                console.log(`Autor: ${livro.autor}`)
                console.log(`Ano: ${livro.ano}`)
                console.log(`Genero: ${livro.genero}`)
                });
            }
    }else{
        console.log('filtro invalido!')
        return;
}
}
module.exports = buscar