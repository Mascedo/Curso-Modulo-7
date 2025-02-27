function buscar(lista,cont,tipo){
    if(['nome', 'matricula', 'curso'].includes(cont)){
        let novoArr = lista.filter(aluno => aluno[cont] === tipo)
        if(novoArr.length>0){
            console.log('Alunos com este filtro:')
            novoArr.forEach(aluno => {
                console.log('--------------------------')
                console.log(`ID: ${aluno.id}`)
                console.log(`Nome: ${aluno.nome}`)
                console.log(`Matricula: ${aluno.matricula}`)
                console.log(`Curso: ${aluno.curso}`)
                console.log(`Ano: ${aluno.ano}`)
                });
            }
    }else{
        console.log('filtro invalido!')
        return;
}
}
module.exports = buscar