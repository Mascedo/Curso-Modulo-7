function lista(l){
    l.forEach(livro => {
        console.log('--------------------------')
        console.log(`ID: ${livro.id}`)
        console.log(`Titulo: ${livro.ti}`)
        console.log(`Autor: ${livro.au}`)
        console.log(`Ano: ${livro.an}`)
        console.log(`Genero: ${livro.ge}`)
    });
}
module.exports = lista