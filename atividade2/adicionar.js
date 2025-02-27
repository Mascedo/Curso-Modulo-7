function adicionar(lista,nome,matricula,curso,ano){
    let id = Date.now()
    lista.push({id,nome,matricula,curso,ano})
}
module.exports = adicionar