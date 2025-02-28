function adicionar(lista,nome,cargo,departamento,salario){
    let id = Date.now()
    lista.push({id,nome,cargo,departamento,salario})
}
module.exports = adicionar