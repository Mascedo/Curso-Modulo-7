function atualizar(lista,id,ti,di,an,ge){
    let idIndex = lista.findIndex(contato => contato.id === id)
    if(idIndex !== -1&&lista[idIndex].id === id){
        lista[idIndex].ti = ti
        lista[idIndex].di = di
        lista[idIndex].an = an
        lista[idIndex].ge = ge
        console.log('Atualizado, use 2 para verificar.')
        return lista;
    }else{
        console.log('ID não encontrado')
    }
}
module.exports = atualizar