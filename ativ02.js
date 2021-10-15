//#1
const ifs = numero => {
    if (numero % 5 == 0 && numero % 3 == 0) {
        console.log("JAVASCRIPT");
    }
    else if (numero % 5 == 0) {
        console.log("Bora");
    }
    else if (numero % 3 == 0) {
        console.log("Vamo");
    }
}

ifs(333);

//#2
const qual_meu_signo = (mes, dia) => {
    if (mes == 03 && dia >= 21 || mes == 04 && dia <= 20) {
        console.log('áries');
    }
    if (mes == 04 && dia >= 21 || mes == 05 && dia <= 20) {
        console.log('touro');
    }
    if (mes == 05 && dia >= 21 || mes == 06 && dia <= 20) {
        console.log('gêmeos');
    }
    if (mes == 06 && dia >= 21 || mes == 07 && dia <= 22) {
        console.log('câncer');
    }
    if (mes == 07 && dia >= 23 || mes == 08 && dia <= 22) {
        console.log('leão');
    }
    if (mes == 08 && dia >= 23 || mes == 09 && dia <= 22) {
        console.log('virgem');
    }
    if (mes == 09 && dia >= 23 || mes == 10 && dia <= 22) {
        console.log('libra');
    }
    if (mes == 10 && dia >= 23 || mes == 11 && dia <= 21) {
        console.log('escorpião');
    }
    if (mes == 11 && dia >= 22 || mes == 12 && dia <= 21) {
        console.log('sagitário');
    }
    if (mes == 12 && dia >= 22 || mes == 01 && dia <= 19) {
        console.log('capricórnio');
    }
    if (mes == 01 && dia >= 20 || mes == 02 && dia <= 18) {
        console.log('aquário');
    }
    if (mes == 02 && dia >= 19 || mes == 03 && dia <= 20) {
        console.log('peixes');
    }
}
qual_meu_signo(09, 16);