function atualizar(lista,id,nome,matricula,curso,ano){
    let idIndex = lista.findIndex(contato => contato.id === id)
    if(idIndex !== -1&&lista[idIndex].id === id){
        lista[idIndex].nome = nome
        lista[idIndex].matricula = matricula
        lista[idIndex].curso = curso
        lista[idIndex].ano = ano
        console.log('Atualizado, use 2 para verificar.')
        return lista;
    }else{
        console.log('ID não encontrado')
    }
}
module.exports = atualizar