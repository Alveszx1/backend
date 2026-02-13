// Comentário em linhas




// Exibe conteúdo no terminal
console.log("Testando JS")

// Declaração de variáveis
var nome = "Bruno"

// Imprimir conteúdo na tela 
console.log(nome)
console.log("O nome do usuário é " +nome)
console.log(`O nome do usuário é ${nome}`)

// Import da biblioteca do readline()
// readline -> Permite a entrada de dados via terminal

var readline = require('readline')



// Cria um objeto especialista em entrada de dados pelo terminal
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


//Permite a entrada de dados do nome do usuário
// Question -> utiliza uma função de CALLBACK para devolver o valor digitado
// CALLBACK -> É uma função particular de um método que é chamado para
// encaminhar um conteúdo para o desemvpolvedor , esse conteúdo vem através da
// variável com argumento "nomeUsuario"

leitor.question("Digite seu nome: ", function(nomeUsuario){

    console.log("O nome digitado foi: " + nomeUsuario)

    leitor.question("Digite seu Gmail: ",function(emailUsuario){
        console.log(`O email do usuário ${nome} é ${emailUsuario}`)
    })
})


