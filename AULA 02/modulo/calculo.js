

function calcularMedia (primeiraNota, segundaNota, terceiraNota, quartaNota){

    let nota1 = Number(primeiraNota)
    let nota2 = Number(segundaNota)
    let nota3 = Number(terceiraNota)
    let nota4 = Number(quartaNota)


    if(nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "" || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 || isNaN (nota1) || isNaN(nota2) ||  isNaN(nota3) || isNaN(nota4)){
        return false
    } else{

        let media = (nota1 + nota2 + nota3 + nota4) / 4

        return (Number(media.toFixed(2)))

    }


    

}

function verificarSituacaoAluno(media){

    let statusAluno
    let mediaAluno = media
    if (mediaAluno){

        if (mediaAluno >= 70){
            statusAluno = "APROVADO"
          } else if(mediaAluno >= 50 && mediaAluno < 70){
             statusAluno = "RECUPERAÇÃO"
          } else {
             statusAluno = "REPROVADO"
          }
    
          return statusAluno
    } else {
        return false
    }
    

}

module.exports = {
    calcularMedia , 
    verificarSituacaoAluno

}

