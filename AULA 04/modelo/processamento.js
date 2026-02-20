function processamentoDados(numero1 , numero2 , operacao){


   

    if(numero1 === "" || numero2 === ""){
        return false
    }

    let num1String = numero1.replace(",",".")
    let num2String = numero2.replace(",",".")

    let num1 = Number(num1String)
    let num2 = Number(num2String)

    if (isNaN(num1) || isNaN(num2)){
        return false
    } else if (operacao != "adição" && operacao != "subtração" && operacao != "divisão" && operacao != "multiplicação"){
        return false
    } else {
        return true
    }
}

function calcularValores(n1 , n2 , operacao){

    let num1String = n1.replace(",",".")
    let num2String = n2.replace(",",".")

    let num1 = Number(num1String)
    let num2 = Number(num2String)

    let validacao = verificarValores(num1, num2)

    if(validacao){
        if (operacao === "adição"){
            return num1 + num2
        } else if (operacao === "subtração"){
            return num1 - num2
        } else if (operacao === "multiplicação"){
            return num1 * num2
        } else if (operacao === "divisão") {
            if(num2 === 0){
                return false
            }
            else{
                return num1 / num2
            }
        }
    } else {
        return false
    }
    
}

function verificarValores(n1, n2){
    let numero1 = String(n1)
    let numero2 = String(n2)

    numero1 = numero1.split(".")
    numero2 = numero2.split(".")

    
    

    if(numero1.length > 2 || numero2.length > 2){
        return false
    } else {
        return true
    }
}






module.exports = {
    processamentoDados,
    calcularValores

}