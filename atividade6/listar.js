
function listar (lM,lP,lC,opc){
    let opt =  opc.slice(-1)
    if(opt == 1){
        lM.forEach(medico => {
            console.log(`---------------------------`)
            console.log(`ID: ${medico.id}\nNome: ${medico.no}\nEspecialidade: ${medico.es}`)
        });
            console.log(`---------------------------`)
    }else if(opt == 2){
        lP.forEach(paciente => {
            console.log(`---------------------------`)
            console.log(`ID: ${paciente.id}\nNome: ${paciente.no}\nData de nascimento: ${paciente.da}`)
        });
            console.log(`---------------------------`)
    }else{
        if(lC.length>0){
        lC.forEach(consulta =>{
            let nMedico = lM.find(m => m.id === consulta.idM)
            let nPaciente = lP.find(p => p.id === consulta.idP)
            console.log('-------------------------------------------------------------------------------')
            console.log(`ID da consulta: ${consulta.id}`)
            console.log(`Medico: ID: ${nMedico.id}, Nome: ${nMedico.no}, Especialidade: ${nMedico.es}`)
            console.log(`Paciente: ID: ${nPaciente.id}, Nome: ${nPaciente.no}, Data de nascimento: ${nPaciente.da}`)
            console.log('Descrição: '+consulta.dec + '\nData: '+consulta.data)
        });
        console.log('-------------------------------------------------------------------------------')
    }else{
        console.log('Sem consultas!')
    }
    }
}
module.exports = listar 