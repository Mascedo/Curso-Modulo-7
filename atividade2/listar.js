function lista(lista){
    lista.forEach(aluno => {
        console.log('--------------------------')
        console.log(`ID: ${aluno.id}`)
        console.log(`Nome: ${aluno.nome}`)
        console.log(`Matricula: ${aluno.matricula}`)
        console.log(`Curso: ${aluno.curso}`)
        console.log(`Ano: ${aluno.ano}`)
    });
}
module.exports = lista