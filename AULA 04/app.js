const readline = require("readline")
const processamento = require("../AULA 04/processamento")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o primeiro numero de entrada: ", function(numero1){
    let num1 = numero1

    entradaDeDados.question("Digite o segundo número de entrada: ", function(numero2){
        let num2 = numero2

        entradaDeDados.question("Informe a operação matemática que sera feita(adição , subtração , multiplicação, divisão): ", function(operacaoMatematica){
            let operacao = operacaoMatematica


            let validacao = processamento.processamentoDados(num1 , num2, operacao)

           if(validacao){
            
                let calcResultado = processamento.calcularValores(num1, num2, operacao)
                if(calcResultado){
                    console.log(calcResultado)
                }else{
                    console.log("ERRO: Não foi possivel realizar o calculo2")
                }
                
           } else{
            console.log("ERRO: Não foi possivel realizar o calculo")
           } 
        })
    })
})