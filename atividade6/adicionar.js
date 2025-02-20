const prompt = require('prompt-sync')();
function adicionar(lM,lP,lC,opc){
    let opt =  opc.slice(-1)
    if(opt == 1){
        let id = Date.now()
        let no = prompt('Nome do medico: ')
        let es = prompt('Especialidade do medico: ')
        lM.push({id,no,es})
    }else if(opt == 2){
        let id = Date.now()
        let no = prompt('Nome do paciente: ')
        let da = prompt('Data de nascimento: ')
        lP.push({id,no,da})
    }else{
        let id = Date.now()
        let idM = Number(prompt('ID do medico: '))
        let idP = Number(prompt('ID do paciente: '))
        let data = prompt('Data da consulta(DD/MM/AAAA): ')
        let dec = prompt('descrição da consulta:')

        let idMv = lM.find(medico => medico.id === idM) 
        let idPv = lP.find(paci => paci.id === idP) 

        if(idMv&&idPv){
            lC.push({id,idM,idP,dec,data})
            console.log('Consulta adicionada!')
        }else{
            console.log('ID de medico ou paciente não encoontrado!')
            return;
        }
    }
    
}
module.exports = adicionar