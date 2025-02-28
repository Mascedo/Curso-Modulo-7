function atualizar(lista,id,nome,categoria,departamento,salario){
    let idIndex = lista.findIndex(funcionario => funcionario.id === id)
    if(idIndex !== -1&&lista[idIndex].id === id){
        lista[idIndex].nome = nome
        lista[idIndex].cargo = categoria
        lista[idIndex].departamento = departamento
        lista[idIndex].salario = salario
        console.log('Atualizado, use 2 para verificar.')
        return lista;
    }else{
        console.log('ID não encontrado')
    }
}
module.exports = atualizar