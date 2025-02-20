function buscar(lista,cont,tipo){
    if(['no','ca', 'de', 'sa'].includes(cont)){
        let nArr = lista.filter(rr => rr[cont] === tipo)
        if(nArr.length>0){
            console.log('Funcionarios com este filtro:')
            nArr.forEach(func => {
                console.log('--------------------------')
                console.log(`ID: ${func.id}`)
                console.log(`Nome: ${func.no}`)
                console.log(`Cargo: ${func.ca}`)
                console.log(`Departamento: ${func.de}`)
                console.log(`Salario: ${func.sa}`)
                });
            }
    }else{
        console.log('filtro invalido!')
        return;
}
}
module.exports = buscar