function buscar(lista,cont,tipo){
    if(['ti', 'di', 'an', 'ge'].includes(cont)){
        let nArr = lista.filter(rr => rr[cont] === tipo)
        if(nArr.length>0){
            console.log('Filmes com este filtro:')
            nArr.forEach(livro => {
                console.log('--------------------------')
                console.log(`ID: ${livro.id}`)
                console.log(`Titulo: ${livro.ti}`)
                console.log(`Diretor: ${livro.di}`)
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