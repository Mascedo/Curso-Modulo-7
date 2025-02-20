const listar = require('./listar');
const prompt = require('prompt-sync')();
function buscar(lM,lP,lC,opc){
    let opt =  opc.slice(-1)
    if(opt == 1){
        let opc2 = prompt(`Deseja pesquisar medico por 1.nome ou 2.especialidade:`)
        if(opc2 == 1){
            let nome = prompt('Nome buscado: ')
            let nrr = lM.filter(medico => medico.no === nome)
            console.log('Encontrado:')
            console.log(nrr)
        }else if(opc2 == 2){
            let espc = prompt('Especialidade buscada: ')
            let nrr = lM.filter(medico => medico.es === espc)
            console.log('Encontrado:')
            console.log(nrr)
        }else{
            console.log('Invalido')
            return;
        }
    }else if(opt == 2){
        let opc2 = prompt(`Deseja pesquisar paciente por 1.nome ou 2.data:`)
        if(opc2 == 1){
            let nome = prompt('Nome buscado: ')
            let nrr = lP.filter(paciente => paciente.no === nome)
            console.log('Encontrado:')
            console.log(nrr)
        }else if(opc2 == 2){
            let data = prompt('Data buscada: ')
            let nrr = lP.filter(paciente => paciente.da === data)
            console.log('Encontrado:')
            console.log(nrr)
        }else{
            console.log('Invalido')
            return;
        }
    }else{
        let opr = Number(prompt('Deseja 1.pesquisar ou 2.relatorios: '))
    if(opr === 1) {
        let opc3 = Number(prompt(`Deseja pesquisar consulta por 1.data, 2.medico(id), 3.paciente(id), 4.descrição: `))
        switch(opc3){
            case 1:
                let data = prompt('Data buscada: ')
                let nrr = lC.filter(consulta => consulta.data === data)
                console.log('Encontrado:')
                console.log(nrr)
            break;
            case 2:
                let medico = prompt('ID de medico buscado: ')
                let nrrM = lC.filter(consulta => consulta.idM == medico)
                console.log('Encontrado:')
                console.log(nrrM)
            break;
            case 3:
                let paciente = prompt('ID de paciente buscado: ')
                let nrrP = lC.filter(consulta => consulta.idP == paciente)
                console.log('Encontrado:')
                console.log(nrrP)
            break;
            case 4:
                let desc = prompt('Descrição buscada: ')
                let nrrD = lC.filter(consulta => consulta.dec === desc)
                console.log('Encontrado:')
                console.log(nrrD)
            break;
            default:
            console.log('Opção invalida!')
            break;
        }
    }else if(opr === 2){
        console.log(`
    ---------------------------RELATORIOS---------------------------
    1.Listar todas as consultas realizadas por um médico específico.
    2.Listar todos os pacientes atendidos por um médico específico.
    3.Listar todos os médicos que atenderam um paciente específico.
    4.Listar todas as consultas realizadas em um mês específico.
`)
    let resp = Number(prompt('Qual relatorio a fazer:'))
    switch(resp){
        case 1:
        let medID = Number(prompt('ID do medico: '))
        let medC = lC.filter(medico => medico.idM === medID)
        if(medC.length !== 0){
            console.log(medC)
        }else{
            console.log('Nenhuam consulta feita ou ID invalido!')
            return;
        }
        break;
        case 2:
        let medaID = Number(prompt('ID do medico: '))
        let medP = lC.filter(medico => medico.idM === medaID)
        if(medP.length !== 0){
            medP.forEach(idp => {
                let pac = lP.filter(paciente => paciente.id === idp.idP)
                console.log(pac)
            });
        }else{
            console.log('Nenhuam consulta feita ou ID invalido!')
        }
        break;
        case 3:
        let pacID = Number(prompt('ID do paciente: '))
        pacM = lC.filter(paciente => paciente.idP === pacID)
        if(pacM.length !== 0){
            pacM.forEach(idm => {
                let pac = lM.filter(medico => medico.id === idm.idM)
                console.log(pac)
            });
        }else{
            console.log('Nenhuam consulta feita ou ID invalido!')
        }
        break;
        case 4:
        let data = prompt('Mês desejado (ex:setembro = 09): ')
        let achados = []
        lC.forEach(consulta => {
            let mes = consulta.data.slice(3,5)
            if(mes === data){
                achados.push(consulta)
            }
        });
        if(achados.length !== 0){
            listar(lM,lP,achados,'23')
        }else{
            console.log('Nenhum mes encontrado ou entrada invalida!')
        }
        break;
        default:
        console.log('Opção invalida!')
        return;
    }
    }else{
        console.log('Opção invalida!')
    }
}
}
module.exports = buscar