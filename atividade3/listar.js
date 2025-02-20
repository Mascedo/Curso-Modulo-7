function lista(f){
    f.forEach(filme => {
        console.log('--------------------------')
        console.log(`ID: ${filme.id}`)
        console.log(`Titulo: ${filme.ti}`)
        console.log(`Diretor: ${filme.di}`)
        console.log(`Ano: ${filme.an}`)
        console.log(`Genero: ${filme.ge}`)
    });
}
module.exports = lista