const prompt = require('prompt-sync')();
const adicionar = require('./adicionar');
const listar = require('./listar');
const atualizar = require('./atualizar');
const remover = require('./remover');
const buscar = require('./buscar.js');

let lista =[{ id: 1439818088849, nome: 'arroz', categoria: 'alimento', preco: '30', estoque: '200' },
            { id: 1559818088849, nome: 'feijao', categoria: 'alimento', preco: '25', estoque: '120' },
            { id: 1169818088849, nome: 'cafe', categoria: 'patrimonio', preco: '70', estoque: '11' },
            { id: 1233818088849, nome: 'pinhosol', categoria: 'limpeza', preco: '20', estoque: '110' },
            { id: 1113818088849, nome: 'sabao', categoria: 'limpeza', preco: '2', estoque: '300'  },
            { id: 1112818088849, nome: 'tijolo', categoria: 'construcao', preco: '20', estoque: '200'  },
            { id: 1111818081922, nome: 'cimento', categoria: 'construcao', preco: '40', estoque: '30' }]
menu()
function menu(){
console.log(`
    -Gerenciador de estoque-
        1.Adicionar
        2.Listar
        3.Atualizar
        4.Remover
        5.Buscar`)
    let resposta = Number(prompt('Ação desejada:'))
    switch(resposta){
        case 1:
        let nome = prompt('Nome: ').trim()
        let categoria = prompt('Categoria: ').trim()
        let preco = prompt('Preço: ').trim()
        let estoque = prompt('Estoque: ').trim()
        adicionar(lista, nome, categoria, preco, estoque)
        menu()
        break;
        case 2:
        listar(lista)
        menu()
        break;
        case 3:
        let id = Number(prompt('ID: '))
        let nNome = prompt('novo nome: ').trim()
        let nCategoria = prompt('nova categoria: ').trim()
        let nPreco = prompt('novo preço: ').trim()
        let nEstoque = prompt('novo estoque: ').trim()
        lista = atualizar(lista,id,nNome,nCategoria,nPreco,nEstoque)
        menu()
        break;
        case 4:
        let idr = Number(prompt('ID do titulo a remover: '))
        lista = remover(lista,idr)
        menu()
        break;
        case 5:
        let filtro = prompt('filtro desejado(nome, categoria, preco, estoque): ')
        let tipo = prompt('somente iguais a:')
        buscar(lista,filtro,tipo)
        menu()
        break;
        default:
        console.log('Opção invalida!')
        menu()
        break;
    }
}