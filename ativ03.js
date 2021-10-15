//#1

var aprovados = [
    {candidato: "Renato Soares", nota: 7.8, idade: 29},
    {candidato: "Marcos Teixeira", nota: 7.8, idade: 26},
    {candidato: "Priscila Gomes", nota: 7.8, idade: 30},
    {candidato: "João Oliveira", nota: 7.8, idade: 27},
    {candidato: "Adriana Telles", nota: 7.8, idade: 28}
];
const fichas = function(){
    var idade28_ou29 = aprovados.filter(({idade}) => idade >= 28 && idade <= 30);
    console.log(idade28_ou29);
}


fichas();

//#2
const repeticao = function(repetido){
    repetido_repetido = repetido.repeat(37);
    console.log(repetido_repetido);
}
repeticao('string qualquer ');