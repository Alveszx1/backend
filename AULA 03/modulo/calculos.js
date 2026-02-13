/**
 * Objetivo: Arquivo responsável pelas funções de calculos financeiros
 * Autor:
 * Data: 11/02/2026
 * Versão:
 */

function calcularJurosCompostos(valor, taxa , parcelas){


    // Recebe os valores dos argumentos e converte em número
    let valorPrincipal = Number(valor)
    let taxaJuros = Number(taxa) 
    let qtdParcelas = Number(parcelas)


    if(valor == "" || isNaN(valor) || valor <= 0 || parcelas <= 0|| parcelas == "" || isNaN(parcelas)){
        return false
    }

    let percentual = calculoPercentual(taxaJuros)
    

    if(percentual){
        let montante = valorPrincipal * ((1 + percentual) ** qtdParcelas)
        return Number(montante.toFixed(2))
    } else {
        return false
    }

}

function calculoPercentual(numero){
    let numeroPercentual = Number(numero)


    // Validação de entrada vazia , menor || = 0 e verificiar se é numero
    if(numero == "" || numero <= 0 || isNaN(numero)){
        return false
    }else {
    let percentual = numeroPercentual / 100
    return Number(percentual.toFixed(2))
    }
}

// Tornando funções públicas para que outros arquivos possam utilizar
module.exports = {
    calculoPercentual , 
    calcularJurosCompostos

}