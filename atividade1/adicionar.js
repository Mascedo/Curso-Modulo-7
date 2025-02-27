function adicionar(lista,titulo,autor,ano,genero){
    let id = Date.now()
    lista.push({id,titulo,autor,ano,genero})
}
module.exports = adicionar