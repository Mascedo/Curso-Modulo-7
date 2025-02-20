function atualizar(lista,id,no,ca,de,sa){
    let idIndex = lista.findIndex(contato => contato.id === id)
    if(idIndex !== -1&&lista[idIndex].id === id){
        lista[idIndex].no = no
        lista[idIndex].ca = ca
        lista[idIndex].de = de
        lista[idIndex].sa = sa
        console.log('Atualizado, use 2 para verificar.')
        return lista;
    }else{
        console.log('ID não encontrado')
    }
}
module.exports = atualizar