function atualizar(lista,id,no,ca,pr,es){
    let idIndex = lista.findIndex(contato => contato.id === id)
    if(idIndex !== -1&&lista[idIndex].id === id){
        lista[idIndex].no = no
        lista[idIndex].ca = ca
        lista[idIndex].pr = pr
        lista[idIndex].es = es
        console.log('Atualizado, use 2 para verificar.')
        return lista;
    }else{
        console.log('ID não encontrado')
    }
}
module.exports = atualizar