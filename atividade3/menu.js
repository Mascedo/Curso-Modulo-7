const prompt = require('prompt-sync')();
const adicionar = require('./adicionar');
const listar = require('./listar');
const atualizar = require('./atualizar');
const remover = require('./remover');
const buscar = require('./buscar.js');

let lista =[{ id: 1439818088849, ti: 'grande arroz', di: 'rr2', an: '2010', ge: 'arrox' },
            { id: 1559818088849, ti: 'arroz frito', di: 'rr2', an: '2011', ge: 'arrox' },
            { id: 1169818088849, ti: 'dumidara', di: 'rato', an: '2010', ge: 'ratol' },
            { id: 1233818088849, ti: 'ncinema', di: 'eimul', an: '2020', ge: 'romance' },
            { id: 1113818088849, ti: 'japao', di: 'fassomoto', an: '1935', ge: 'funcao' },
            { id: 1112818088849, ti: 'cinema', di: 'lumie', an: '2020', ge: 'cinema' },
            { id: 1111818081922, ti: 'uniao sovietica', di: 'jose stanley', an: '1991', ge: 'sumiu' }]
menu()
function menu(){
console.log(`
    -Gerenciador de filmes-
        1.Adicionar
        2.Listar
        3.Atualizar
        4.Remover
        5.Buscar`)
    let resposta = Number(prompt('Ação desejada:'))
    switch(resposta){
        case 1:
        let titulo = prompt('Titulo: ').trim()
        let diretor = prompt('Diretor: ').trim()
        let ano = prompt('Ano de lançamento: ').trim()
        let genero = prompt('Genero: ').trim()
        adicionar(lista, titulo, diretor, ano, genero)
        menu()
        break;
        case 2:
        listar(lista)
        menu()
        break;
        case 3:
        let id = Number(prompt('ID: '))
        let nTitulo = prompt('novo titulo: ').trim()
        let nDiretor = prompt('novo diretor: ').trim()
        let nAno = prompt('novo ano de lançamento: ').trim()
        let nGenero = prompt('novo genero: ').trim()
        lista = atualizar(lista,id,nTitulo,nDiretor,nAno,nGenero)
        menu()
        break;
        case 4:
        let idr = Number(prompt('ID do titulo a remover: '))
        lista = remover(lista,idr)
        menu()
        break;
        case 5:
        let cond = prompt('filtro desejado(ti = titulo, di = diretor, an = ano, ge = genero): ')
        let tipo = prompt('somente iguais a:')
        buscar(lista,cond,tipo)
        menu()
        break;
        default:
        console.log('Opção invalida!')
        menu()
        break;
    }
}