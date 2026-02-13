/**************************************************************************
 * Autor: Bruno Haddad Alves
 * Data:04/02/2026
 * Versão: 1.0
 * 
 ***************************************************************************/

const { stdin, stdout } = require('process')
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: stdout,
})


console.log("")

entradaDeDados.question("Digite o nome do cliente: ", function (nome) {
    let nomeCliente = nome

    entradaDeDados.question("Digite o nome do produto: ", function (produto) {
        let nomeProduto = produto

        entradaDeDados.question("Digite o valor da compra: ", function (precoCompra) {
            let valorCompra = precoCompra

            entradaDeDados.question("Digite o valor taxa de juros: ", function (taxa) {
                let taxaJuros = taxa
                taxaJuros = taxaJuros / 100

                entradaDeDados.question("Digite o  valor de tempo de pagamento: ", function (tempoParaPagamento) {
                    let tempoPagamento = tempoParaPagamento

                    entradaDeDados.question("Digite a periodo para pagamento (Anos ou meses): ", function (anosMeses) {
                        let periodo = anosMeses
                        let tempo = tempoPagamento
                        if (periodo == "Meses" || periodo == "meses" || periodo == "MESES" ) {
                            tempoPagamento = tempoPagamento * 1
                        } else if (periodo == "Anos" || periodo == "anos" || periodo == "ANOS") {
                            tempoPagamento = tempoPagamento * 12
                        } else {
                            console.log("Opção Invalida")
                        }
                        console.log("")

                        if (nomeCliente == "" || valorCompra == "" || taxaJuros == "" || tempoPagamento == "") {
                            console.log("Preencha todos os campos necessários")
                        } else if (isNaN(valorCompra) || isNaN(taxaJuros) || isNaN(tempoPagamento)) {
                            console.log("ERRO: Somente numeros são permitidos na entrada de valores")
                        } else if (valorCompra < 0 || taxaJuros < 0 || tempoPagamento < 0) {
                            console.log("Somente permitido numeros acima de 0")
                        } else if (!isNaN(nomeCliente) || !isNaN(nomeProduto)) {
                            console.log("Somente letras são permitidas nas entradas de nomes")
                        } else if(periodo == ""){
                            console.log("ERRO: O campo de período esta vazio")
                        }else if (periodo != "Meses" && periodo != "meses" && periodo != "MESES" &&
                            periodo != "Anos"  && periodo != "anos"  && periodo != "ANOS") {
                            console.log("ERRO: O campo de período está incorreto");
                        }else {
                            let montante = Number(valorCompra) * ((1 + Number(taxaJuros)) ** Number(tempoPagamento))


                            let valorAcrescentado = montante - valorCompra


                            console.log(`******************* [Viva Modas] *******************`)
                            console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}`)
                            console.log(`A compra do produto ${produto}, tem um valor de: ${valorCompra}.`)
                            console.log(`A sua compra será parcelada em ${tempo} ${periodo} e o Sr(a) pagará: ${montante.toFixed(2)}.`)
                            console.log(`O acréscimo realizado ao valor de: ${valorCompra} será de ${valorAcrescentado.toFixed(2)}.`)
                            console.log(`****************************************************`)


                        }


                    })

                })
            })
        })

    })

})