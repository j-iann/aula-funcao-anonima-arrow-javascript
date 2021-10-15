//#1
const capitaisNordeste = function(arrayCapitais) {
    const arrayCapitaisString = arrayCapitais.toString();
    console.log(arrayCapitaisString.toUpperCase());
}
capitaisNordeste(['Maceió', 'Recife', 'Salvador', 'Fortaleza', 'Aracaju']);

//#2
const retornar_numeros = function() {
    for (let p = 100; p < 450; p++) {
        if (p % 2 == 0) {
            console.log(p);
        }
    }
}
retornar_numeros();

//#3
const quatro_strings = function(s1, s2, s3, s4) {
    const concatenar = `${s1} ${s2} ${s3} ${s4}`;
    console.log(concatenar);
}
quatro_strings('kek', 'lul', 'omo', 'ayaya');
