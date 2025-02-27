function lista(filmes){
    filmes.forEach(filme => {
        console.log('--------------------------')
        console.log(`ID: ${filme.id}`)
        console.log(`Titulo: ${filme.titulo}`)
        console.log(`Diretor: ${filme.diretor}`)
        console.log(`Ano: ${filme.ano}`)
        console.log(`Genero: ${filme.genero}`)
    });
}
module.exports = lista