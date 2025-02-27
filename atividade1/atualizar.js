function atualizar(lista,id,titulo,autor,ano,genero){
    let idIndex = lista.findIndex(contato => contato.id === id)
    if(idIndex !== -1&&lista[idIndex].id === id){
        lista[idIndex].titulo = titulo
        lista[idIndex].autor = autor
        lista[idIndex].ano = ano
        lista[idIndex].genero = genero
        console.log('Atualizado, use 2 para verificar.')
        return lista;
    }else{
        console.log('ID não encontrado')
    }
}
module.exports = atualizar