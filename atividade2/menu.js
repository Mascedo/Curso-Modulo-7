const prompt = require('prompt-sync')();
const adicionar = require('./adicionar');
const listar = require('./listar');
const atualizar = require('./atualizar');
const remover = require('./remover');
const buscar = require('./buscar.js');

let lista =[{ id: 1439818088849, no: 'mascedo', ma: '210', cs: 'cs', an: '1' },
            { id: 1559818088849, no: 'juan', ma: '211', cs: 'cs', an: '2' },
            { id: 1169818088849, no: 'pablo', ma: '213', cs: 'flick', an: '1' },
            { id: 1233818088849, no: 'ezaki', ma: '212', cs: 'houm', an: '3' },
            { id: 1113818088849, no: 'voto', ma: '219', cs: 'houm', an: '1' },
            { id: 1112818088849, no: 'vato', ma: '219', cs: 'erj', an: '1' },
            { id: 1111818081922, no: 'pato', ma: '220', cs: 'jre', an: '2' }]
menu()
function menu(){
console.log(`
    -Gerenciador de alunos-
        1.Adicionar
        2.Listar
        3.Atualizar
        4.Remover
        5.Buscar`)
    let resposta = Number(prompt('Ação desejada:'))
    switch(resposta){
        case 1:
        let nome = prompt('Nome: ').trim()
        let matricula = prompt('Matricula: ').trim()
        let curso = prompt('Curso: ').trim()
        let ano = prompt('Ano: ').trim()
        adicionar(lista,nome,matricula,curso,ano)
        menu()
        break;
        case 2:
        listar(lista)
        menu()
        break;
        case 3:
        let id = Number(prompt('ID: '))
        let nNom = prompt('novo nome: ').trim()
        let nMar = prompt('nova matricula: ').trim()
        let nCur = prompt('novo curso: ').trim()
        let nAno = prompt('novo ano: ').trim()
        lista = atualizar(lista,id,nNom,nMar,nCur,nAno)
        menu()
        break;
        case 4:
        let idr = Number(prompt('ID do titulo a remover: '))
        lista = remover(lista,idr)
        menu()
        break;
        case 5:
        let cond = prompt('filtro desejado(no = nome, ma = matricula, cs = curso): ')
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