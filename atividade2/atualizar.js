function atualizar(lista,id,no,ma,cs,an){
    let idIndex = lista.findIndex(contato => contato.id === id)
    if(idIndex !== -1&&lista[idIndex].id === id){
        lista[idIndex].no = no
        lista[idIndex].ma = ma
        lista[idIndex].cs = cs
        lista[idIndex].an = an
        console.log('Atualizado, use 2 para verificar.')
        return lista;
    }else{
        console.log('ID não encontrado')
    }
}
module.exports = atualizar