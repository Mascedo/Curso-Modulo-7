const prompt = require('prompt-sync')();
const addBara = require('./addBara');
const addFlash = require('./addFlash');
const listar = require('./listar');
const atualizar = require('./atualizar');
const remover = require('./remover');
const buscar = require('./buscar');

let baralhos = []
menu()
function menu(){
    console.log(`
        -----Gerenciador de Baralhos e Flascards-----
            1.Adicionar baralho
            2.Adicionar flashcard
            3.Listar todos os baralhos cadastrados
            4.Listar todos os flashcards cadastrados
            5.Listar todos os flashcards de um baralho
            6.Atualizar os título de um baralho
            7.Atualizar os dados de um flashcard
            8.Remover um baralho
            9.Remover um flashcard
            10.Busca de Flashcards`)
        let resp = Number(prompt('Ação a fazer: '))
    switch(true){
        case resp===1:
        addBara(baralhos)
        menu()
        break;
        case resp===2:
        addFlash(baralhos)
        menu()
        break;
        case resp>=3&&resp<=5:
        listar(resp,baralhos)
        menu()
        break;
        case resp>=6&&resp<=7:
        atualizar(resp,baralhos)
        menu()
        break;
        case resp>=8&&resp<=9:
        baralhos = remover(resp,baralhos)
        menu()
        break;
        case resp === 10:
        buscar(baralhos)
        menu()
        break;
        default:
        console.log('Opção invalida!')
        menu()
    }
}