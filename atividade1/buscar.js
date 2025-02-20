function buscar(lista,cont,tipo){
    if(['ti', 'au', 'an', 'ge'].includes(cont)){
        let nArr = lista.filter(rr => rr[cont] === tipo)
        if(nArr.length>0){
            console.log('Livros com este filtro:')
            nArr.forEach(livro => {
                console.log('--------------------------')
                console.log(`ID: ${livro.id}`)
                console.log(`Titulo: ${livro.ti}`)
                console.log(`Autor: ${livro.au}`)
                console.log(`Ano: ${livro.an}`)
                console.log(`Genero: ${livro.ge}`)
                });
            }
    }else{
        console.log('filtro invalido!')
        return;
}
}
module.exports = buscar