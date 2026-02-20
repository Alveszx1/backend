/**
 * Objetivo: Arquivo responsável SOMENTE pelo processamento de calculos matemáticos
 * Data: 20/02/2026
 * Autor: Bruno Haddad Alves
 * Versão: 1.0
 * 
 * 
 * toLowerCase() -> Retorna uma string em minusculo
 * toUpperCase() -> Retorna uma string em MAIUSCULO
 * 
 */

const calcular = function(numero1, numero2, operador){
  let valor1              = Number(numero1)
  let valor2              = Number(numero2)
  let operadorMatematico  = String(operador).toUpperCase()

   let resultado = false

// if(operadorMatematico == "SOMAR"){
//        resultado = valor1 + valor2
//   } else if(operadorMatematico == "SUBTRAIR"){
//        resultado = valor1 - valor2
//   } else if (operadorMatematico == "MULTIPLICAR"){
//        resultado = valor1 * valor2
//   } else if (operadorMatematico == "DIVIDIR"){
//        resultado = valor1 / valor2
//   }

//   return resultado

switch (operadorMatematico) {
    case "SOMAR":
        resultado = valor1 + valor2
        break;
    case "MULTIPLICAR":
        resultado = valor1 * valor2
        break;
    case "SUBTRAIR":
        resultado = valor1 - valor2
        break;
    case "DIVIDIR":
        resultado = valor1 / valor2
        break;    

    default:
        return false
        break;
}

    return resultado
}

let result = calcular(10, 10, "somar")
console.log(result)

   