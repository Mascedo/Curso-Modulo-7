function adicionar(lista,titulo,diretor,ano,genero){
    let id = Date.now()
    lista.push({id,titulo,diretor,ano,genero})
}
module.exports = adicionar