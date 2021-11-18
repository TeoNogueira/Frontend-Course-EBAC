

function calcMedia(notas) {


    var soma = 0

    for( c = 0; c < notas.length; c++) {


        soma += notas[c];

    }

    media = soma / notas.length;



    return media
}


console.log(calcMedia([9, 2]))