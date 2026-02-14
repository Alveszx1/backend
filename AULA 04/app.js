const readline = require("readline")
const processamento = require("../AULA 04/processamento")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o primeiro número: ", function(numero1){
    let num1 = numero1

    entradaDeDados.question("Digite o segundo número: ", function(numero2){
        let num2 = numero2

        entradaDeDados.question("Digite a operação desejada: adição, subtração, multiplicação ou divisão:", function(operacaoMatematica){
            let operacao = operacaoMatematica


            let validacao = processamento.processamentoDados(num1 , num2, operacao)

           if(validacao){
            
                let calcResultado = processamento.calcularValores(num1, num2, operacao)
                if(calcResultado){
                    console.log(calcResultado)
                }else{
                    console.log("ERRO: Não foi possivel realizar o calculo")
                }
                
           } else{
            console.log("ERRO: Não foi possivel realizar o calculo")
           } 
        })
    })
})