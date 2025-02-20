const prompt = require('prompt-sync')();
const adicionar = require('./adicionar');
const listar = require('./listar');
const atualizar = require('./atualizar');
const remover = require('./remover');
const buscar = require('./buscar');
lM = [{id: 131,no: 'romeu', es: 'psicologia'},{id: 1331818991922,no: 'juan', es: 'cardiologia'},{id: 1155818991922,no: 'leticia', es: 'neurologia'}]
lP = [{id: 13,no: 'pablo', da: '09/03/1962'},{id: 1311810991922,no: 'fernando', da: '21/09/1990'},{id: 1198218991922,no: 'alonso', da: '22/01/2001'}]
lC = []

menu()
function menu(){
console.log(`
    -Gerente de consultas-
    1.Adicionar | 1.Medico
    2.Listar    | 2.Paciente
    3.Atualizar | 3.Consulta
    4.Remover   |
    5.Relatorios| 
    ex: 21(listar medicos)`)
    let opc = prompt('ação desejada: ')
    switch(true){
        case opc >= 11 && opc <= 13:
        adicionar(lM,lP,lC,opc)
        menu()
        break;
        case opc >= 21 && opc <= 23:
        listar(lM,lP,lC,opc)
        menu()
        break;
        case opc >= 31 && opc <= 33:
        atualizar(lM,lP,opc)
        menu()
        break;
        case opc == 41:
        lM = remover(lM,lP,lC,opc)
        menu()
        break;
        case opc == 42:
        lP = remover(lM,lP,lC,opc)
        menu()
        break;
        case opc == 43:
        lC = remover(lM,lP,lC,opc)
        menu()
        break;    
        case opc >= 51 && opc <= 53:
        buscar(lM,lP,lC,opc)
        menu()
        break;
        default:
        console.log('Use as opções mostradas!')
        menu()
    }
}