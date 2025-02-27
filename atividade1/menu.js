const prompt = require('prompt-sync')();
const adicionar = require('./adicionar');
const listar = require('./listar');
const atualizar = require('./atualizar');
const remover = require('./remover');
const buscar = require('./buscar.js');

let lista =[{ id: 1439818088849, titulo: 'grande arroz', autor: 'rr2', ano: '2010', genero: 'arrox' },
            { id: 1559818088849, titulo: 'arroz frito', autor: 'rr2', ano: '2011', genero: 'arrox' },
            { id: 1169818088849, titulo: 'dumidara', autor: 'rato', ano: '2010', genero: 'ratol' },
            { id: 1233818088849, titulo: 'ncinema', autor: 'eimul', ano: '2020', genero: 'romance' },
            { id: 1113818088849, titulo: 'japao', autor: 'fassomoto', ano: '1935', genero: 'funcao' },
            { id: 1112818088849, titulo: 'cinema', autor: 'lumie', ano: '2020', genero: 'cinema' },
            { id: 1111818081922, titulo: 'uniao sovietica', autor: 'jose stanley', ano: '1991', genero: 'sumiu' }]
menu()
function menu(){
console.log(`
    -Gerenciador de livros-
        1.Adicionar
        2.Listar
        3.Atualizar
        4.Remover
        5.Buscar`)
    let resposta = Number(prompt('Ação desejada:'))
    switch(resposta){
        case 1:
        let titulo = prompt('Titulo: ').trim()
        let autor = prompt('Autor: ').trim()
        let ano = prompt('Ano de lançamento: ').trim()
        let genero = prompt('Genero: ').trim()
        adicionar(lista, titulo, autor, ano, genero)
        menu()
        break;
        case 2:
        listar(lista)
        menu()
        break;
        case 3:
        let id = Number(prompt('ID: '))
        let nTitulo = prompt('novo titulo: ').trim()
        let nAutor = prompt('novo autor: ').trim()
        let nAno = prompt('novo ano de lançamento: ').trim()
        let nGenero = prompt('novo genero: ').trim()
        lista = atualizar(lista,id,nTitulo,nAutor,nAno,nGenero)
        menu()
        break;
        case 4:
        let idr = Number(prompt('ID do titulo a remover: '))
        lista = remover(lista,idr)
        menu()
        break;
        case 5:
        let cond = prompt('filtro desejado(titulo, autor, ano, genero): ')
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