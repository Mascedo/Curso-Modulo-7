function buscar(lista,cont,tipo){
    if(['titulo', 'diretor', 'ano', 'genero'].includes(cont)){
        let novoArr = lista.filter(filmes => filmes[cont] === tipo)
        if(novoArr.length>0){
            console.log('Filmes com este filtro:')
            novoArr.forEach(filme => {
                console.log('--------------------------')
                console.log(`ID: ${filme.id}`)
                console.log(`Titulo: ${filme.titulo}`)
                console.log(`Diretor: ${filme.diretor}`)
                console.log(`Ano: ${filme.ano}`)
                console.log(`Genero: ${filme.genero}`)
                });
            }
    }else{
        console.log('filtro invalido!')
        return;
}
}
module.exports = buscar