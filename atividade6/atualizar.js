const prompt = require('prompt-sync')();
function atualizar(lM,lP,opc){
    let opt =  opc.slice(-1)
    if(opt == 1){
        let id = Number(prompt('ID do medico:'))
    medico = lM.findIndex(mm => mm.id === id)
    if(medico !== -1&&lM[medico].id === id){
        lM[medico].no = prompt('Novo nome do medico: ')
        lM[medico].es = prompt('Nova especialidade do medico: ')
        return lM
    }else{
        console.log('ID nao encontrado!')
        return;
    }
    }else if(opt == 2){
        let id = Number(prompt('ID do paciente:'))
    paci = lP.findIndex(mm => mm.id === id)
    if(paci !== -1&&lP[paci].id === id){
        lP[paci].no = prompt('Novo nome do paciente: ')
        lP[paci].da = prompt('Nova data do paciente: ')
        return lP
    }else{
        console.log('ID nao encontrado!')
        return;
    }
    }else{
        console.log('Nao é possivel atualizar consultas!')
    }
}
module.exports = atualizar