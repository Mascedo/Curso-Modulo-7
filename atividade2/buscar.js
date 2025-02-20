function buscar(lista,cont,tipo){
    if(['no', 'ma', 'cs'].includes(cont)){
        let nArr = lista.filter(rr => rr[cont] === tipo)
        if(nArr.length>0){
            console.log('Alunos com este filtro:')
            nArr.forEach(aluno => {
                console.log('--------------------------')
                console.log(`ID: ${aluno.id}`)
                console.log(`Nome: ${aluno.no}`)
                console.log(`Matricula: ${aluno.ma}`)
                console.log(`Curso: ${aluno.cs}`)
                console.log(`Ano: ${aluno.an}`)
                });
            }
    }else{
        console.log('filtro invalido!')
        return;
}
}
module.exports = buscar