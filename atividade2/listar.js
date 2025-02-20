function lista(l){
    l.forEach(aluno => {
        console.log('--------------------------')
        console.log(`ID: ${aluno.id}`)
        console.log(`Nome: ${aluno.no}`)
        console.log(`Matricula: ${aluno.ma}`)
        console.log(`Curso: ${aluno.cs}`)
        console.log(`Ano: ${aluno.an}`)
    });
}
module.exports = lista