/***********************************************************************************************************************
 * Objetivo: Criar uma aplicação que realiza calculos de juros, utilizando funções para modularizar o código
 * Autor: Bruno Haddad Alves
 * Data: 11/02/2026
 * Versão: 1.0 
 * 
 *************************************************************************************************************************/

const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o nome do cliente: ", function(nome){
    let nomeCliente = nome
    entradaDeDados.question("Digite o nome do produto: ", function(produto){
        let nomeProduto = produto

        entradaDeDados.question("Digite o valor da compra: ", function(valor){
            let valorCompra = valor

            entradaDeDados.question("Digite a taxa de juros: ", function(taxa){
                let taxaJuros = taxa


                entradaDeDados.question("Digite a quantidade de parcelas: ", function(parcelas){
                    let valorParcelas = parcelas



                    // importar biblioteca de calculos

                    let calculos = require("./modulo/calculos")

                    let montante = calculos.calcularJurosCompostos(valorCompra, taxaJuros , valorParcelas)

                    if(montante){
                        console.log("O valor final é: " + montante)
                    }else{
                        console.log("ERRO: Não foi possivel realizar o calculo")
                    }
                    //let percentual = calculoPercentual(taxaJuros)

                    //console.log(percentual)


                    

                    //let montante = Number(valorCompra) * ((1 + percentual) ** Number(valorParcelas))

                    //console.log("O valor final é " + montante.toFixed(2))


                })
            })
        })
    })
})