function lista(l){
    l.forEach(func => {
        console.log('--------------------------')
        console.log(`ID: ${func.id}`)
        console.log(`Nome: ${func.no}`)
        console.log(`Cargo: ${func.ca}`)
        console.log(`Departamento: ${func.de}`)
        console.log(`Salario: ${func.sa}`)
    });
}
module.exports = lista