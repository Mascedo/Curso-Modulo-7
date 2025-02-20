function adicionar(lista,ti,au,an,ge){
    let id = Date.now()
    lista.push({id,ti,au,an,ge})
}
module.exports = adicionar