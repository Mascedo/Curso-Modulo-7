function lista(l){
    l.forEach(func => {
        console.log('--------------------------')
        console.log(`ID: ${func.id}`)
        console.log(`Nome: ${func.nome}`)
        console.log(`Cargo: ${func.cargo}`)
        console.log(`Departamento: ${func.departamento}`)
        console.log(`Salario: ${func.salario}`)
    });
}
module.exports = lista