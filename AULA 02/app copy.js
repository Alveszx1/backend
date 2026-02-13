/**************************************************************************
 * Autor: Bruno Haddad Alves
 * Data:29/01/2026
 * Versão: 1.0
 * 
 ***************************************************************************/

/*

var -> Permite criar um espaço em memoria do tipo variável, forma antiga e projetos mais antigos

Dica: Usar apenas em escopo global


let -> Permite criar um espaço em memória do tipo variável.
Essa forma de criação é realizada somente no escopo local ,
ou seja dentro do bloco de programação {}.
esse tipo de variavel deixa de existir ao término do bloco

const -> Permite criar um espaço em memoria do tipo constante,
esse conteúdo não pode sofrer mudanças durante o projeto


Dica: cria com letra maiuscula para facilitar a sua utilização.
Pode ser criada de forma local ou global

== -> permite a comparação de dois conteúdos
!= ->permite comparar a diferença de dois conteúdos
<  ->permite validar o valor menor
>  ->permite validar o valor maior 
<= ->permite validar se o valor é menor ou igual
>= ->permite validar se o valor é maior ou igual
=== ->permite fazer comparação entre conteúdo e tipagem
!== -> permite comparar a diferença de conteudo e a igualdade de tipagem de dados
==! -> permite comparar a igualdade de conteúdo e a diferença de tipagem de dados



    Tipos de operadores lógicos
    E -> AND -> &&
    OU -> OR -> ||
    NÃO -> NOT -> 


    Formas de conversão de tipos de dados

    parseInt() -> permite converter um conteúdo em numero do tipo INTEIRO
    parseFloat() -> Permite converter um conteúdo em numero do tipo Decimal
    Number() -> Permite converter um conteúdo para NUMERO, podendo ser inteiro ou decimal 
    String() -> Permite converter um conteúdo em String
    Boolean() -> Permite converter um conteúdo para Booleano (true or false )

    typeof() -> Retorna tipos de dados de uma variável
*/




const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


entradaDeDados.question("Digite seu nome: ", function(nomeAluno) {

    let alunoNome = nomeAluno

    console.log(" ")

        
    entradaDeDados.question("Digite a nota 1: ", function(valor1) {
            let nota1 = valor1
        entradaDeDados.question("Digite a nota 2: ", function(valor2) {
              let nota2 = valor2
            entradaDeDados.question("Digite a nota 3: ", function(valor3) {
                let nota3 = valor3
                entradaDeDados.question("Digite a nota 4: ", function(valor4) {
                    let nota4 = valor4

                    if(alunoNome == '' || nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){
                        console.log("ERRO: Existem campos obrigatórios que não foram preenchidos !!!")
                    }else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){

                        console.log("ERRO: Somente são possiveis valores entre 0 e 100")

                    }
                    else if (isNaN(nota1) || isNaN(nota2)|| isNaN(nota3)|| isNaN(nota4)){
                        console.log("ERRO: Somente numeros são permitidos na entrada das notas")
                    } else{

                        let statusAluno
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                        // toFixed é um método que permite fixar a quantidade de casas decimais
                       

                         if (media >= 70){
                           statusAluno = "APROVADO"
                         } else if(media >= 50 && media < 70){
                            statusAluno = "RECUPERAÇÃO"
                         } else {
                            statusAluno = "REPROVADO"
                         }
                         


                         console.log(" ")
                         console.log(`ALUNO: ${nomeAluno}\nMEDIA: ${media.toFixed(2)}\nAPROVAÇÃO: ${statusAluno}\n`)
                    }
                });
            });
        });
    });
});

