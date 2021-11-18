var alunos = [
    [3, 2, 8, 7],
    [8, 9, 4, 9,],
    [10, 8, 7, 8,]

]




var nota = 0


for(var i = 0; i < alunos.length; i++) {
  
nota = 0
aluno = alunos[i]

console.log("Aluno: " + aluno)

for(c = 0; c < aluno.length; c++) {

    nota += aluno[c]

}

media = nota / 4;

if(media >= 7) {

resultado = "aprovado";


} else {

    resultado = "reprovado";
}

console.log("Resultado: " + resultado)

};


