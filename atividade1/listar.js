function lista(l){
    l.forEach(livro => {
        console.log('--------------------------')
        console.log(`ID: ${livro.id}`)
        console.log(`Titulo: ${livro.titulo}`)
        console.log(`Autor: ${livro.autor}`)
        console.log(`Ano: ${livro.ano}`)
        console.log(`Genero: ${livro.genero}`)
    });
}
module.exports = lista