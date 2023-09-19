
let numCpf = document.getElementById('fCPF')

let habName = document.querySelector('#nome')
let habTel = document.querySelector('#telefone')
let habEnv = document.querySelector('#env')
let raiz = document.documentElement.style


console.log(habName)

function isCpf(cpf = 0){

cpf = cpf.value.replace(/\.|-/g,"")


    let somaD1 = 0
    somaD1 += cpf[0]*10  
    somaD1 += cpf[1]*9
    somaD1 += cpf[2]*8
    somaD1 += cpf[3]*7
    somaD1 += cpf[4]*6
    somaD1 += cpf[5]*5
    somaD1 += cpf[6]*4
    somaD1 += cpf[7]*3
    somaD1 += cpf[8]*2  

    somaD1 = (somaD1*10)%11

    let somaD2 = 0
    somaD2 += cpf[0]*11  
    somaD2 += cpf[1]*10
    somaD2 += cpf[2]*9
    somaD2 += cpf[3]*8
    somaD2 += cpf[4]*7
    somaD2 += cpf[5]*6
    somaD2 += cpf[6]*5
    somaD2 += cpf[7]*4
    somaD2 += cpf[8]*3
    somaD2 += cpf[9]*2  

    somaD2 = (somaD2*10)%11


    if(somaD1 == cpf[9] & somaD2 == cpf[10]){
        console.log('CPF Válido!')
        habName.disabled = false
        habTel.disabled = false
        habEnv.disabled = false
        return true;
    }else{
        console.log('CPF Inválido!')
        habName.disabled = true
        habTel.disabled = true
        habEnv.disabled = true
        return false;
    }

}

function notVazio(nome,telefone){

    if(nome.value != ""){
        //habilita o comentarrio
        if(telefone.value != ""){
            console.log("Todos os campos!")
            document.getElementById('obs').type = 'text'
            raiz.setProperty('--obsColor', '#FFF')
            document.getElementById('obs').disabled = false
            
        }else{
            console.log("Preencha todos os campos!")  
        }
        
    }else{
        console.log("Preencha todos os campos!")  
    }
}