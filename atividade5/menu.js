const prompt = require('prompt-sync')();
const adicionar = require('./adicionar');
const listar = require('./listar');
const atualizar = require('./atualizar');
const remover = require('./remover');
const buscar = require('./buscar.js');

let lista =[{ id: 1439818088849, nome: 'gabriel', cargo: 'junior', departamento: 'armazenamento', salario: '1400'},
            { id: 1559818088849, nome: 'juan', cargo: 'pleno', departamento: 'suporte', salario: '1500'},
            { id: 1169818088849, nome: 'pablo', cargo: 'junior', departamento: 'armazenamento', salario: '1400'},
            { id: 1233818088849, nome: 'ezaki', cargo: 'senior', departamento: 'atendimento', salario: '1900'},
            { id: 1113818088849, nome: 'voto', cargo: 'junior', departamento: 'suporte', salario: '1300'},
            { id: 1112818088849, nome: 'vato', cargo: 'pleno', departamento: 'atendimento', salario: '1700'},
            { id: 1111818081922, nome: 'pato', cargo: 'senior', departamento: 'armazenamento', salario: '1600'}]
menu()
function menu(){
console.log(`
    -Gerenciador de funcionarios-
        1.Adicionar
        2.Listar
        3.Atualizar
        4.Remover
        5.Buscar`)
    let resposta = Number(prompt('Ação desejada:'))
    switch(resposta){
        case 1:
        let nome = prompt('Nome: ').trim()
        let cargo = prompt('Cargo: ').trim()
        let departamento = prompt('Departamento: ').trim()
        let salario = prompt('Salario: ').trim()
        adicionar(lista,nome,cargo,departamento,salario)
        menu()
        break;
        case 2:
        listar(lista)
        menu()
        break;
        case 3:
        let id = Number(prompt('ID: '))
        let nNom = prompt('novo nome: ').trim()
        let nCa = prompt('nova cargo: ').trim()
        let nDe = prompt('novo departamento: ').trim()
        let nSa = prompt('novo salario: ').trim()
        lista = atualizar(lista,id,nNom,nCa,nDe,nSa)
        menu()
        break;
        case 4:
        let idr = Number(prompt('ID do titulo a remover: '))
        lista = remover(lista,idr)
        menu()
        break;
        case 5:
        let cond = prompt('filtro desejado(nome, cargo, departamento, salario): ')
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