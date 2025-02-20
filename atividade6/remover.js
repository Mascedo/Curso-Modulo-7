const prompt = require('prompt-sync')();
function remover(lM,lP,lC,opc){
    let opt =  opc.slice(-1)
    if(opt == 1){
        let medicoR = Number(prompt('ID de remoção de medico: '))
        let vMe = lM.find(medico => medico.id === medicoR) 
        if(vMe){
        lM = lM.filter(medico => medico.id !== medicoR) 
        console.log('Medico removido!')
        return lM;
        }else{
            console.log('ID não encontrado!')
            return;
        }
    }else if(opt == 2){
        let pacienteR = Number(prompt('ID de remoção de paciente: '))
        let vPa = lP.find(pac => pac.id === pacienteR) 
        if(vPa){
        lP = lP.filter(pac => pac.id !== pacienteR) 
        console.log('Paciente removido!')
        return lP;
        }else{
            console.log('ID não encontrado!')
            return;
        }
    }else{
        let consultaR = Number(prompt('ID de remoção de consulta: '))
        let vCo = lC.find(pac => pac.id === consultaR) 
        if(vCo){
        lC = lC.filter(pac => pac.id !== consultaR) 
        console.log('Consulta removida!')
        return lC;
        }else{
            console.log('ID não encontrado!')
            return;
        }
    }
    
}
module.exports = remover