function buscar(lista,cont,tipo){
    if(['nome','cargo', 'departamento', 'salario'].includes(cont)){
        let nArr = lista.filter(funcionario => funcionario[cont] === tipo)
        if(nArr.length>0){
            console.log('Funcionarios com este filtro:')
            nArr.forEach(func => {
                console.log('--------------------------')
                console.log(`ID: ${func.id}`)
                console.log(`Nome: ${func.nome}`)
                console.log(`Cargo: ${func.cargo}`)
                console.log(`Departamento: ${func.departamento}`)
                console.log(`Salario: ${func.salario}`)
                });
            }
    }else{
        console.log('filtro invalido!')
        return;
}
}
module.exports = buscar