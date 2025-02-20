const prompt = require('prompt-sync')();
const adicionar = require('./adicionar');
const listar = require('./listar');
const atualizar = require('./atualizar');
const remover = require('./remover');
const buscar = require('./buscar.js');

let lista =[{ id: 1439818088849, no: 'arroz', ca: 'alimento', pr: '30', es: '200' },
            { id: 1559818088849, no: 'feijao', ca: 'alimento', pr: '25', es: '120' },
            { id: 1169818088849, no: 'cafe', ca: 'patrimonio', pr: '70', es: '11' },
            { id: 1233818088849, no: 'pinhosol', ca: 'limpeza', pr: '20', es: '110' },
            { id: 1113818088849, no: 'sabao', ca: 'limpeza', pr: '2', es: '300'  },
            { id: 1112818088849, no: 'tijolo', ca: 'construcao', pr: '20', es: '200'  },
            { id: 1111818081922, no: 'cimento', ca: 'construcao', pr: '40', es: '30' }]
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
        let cond = prompt('filtro desejado(no = nome, ca = categoria, pr = preço, es = estoque): ')
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