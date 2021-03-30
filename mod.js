
function mod(x, y) {

    validarParametro(x, 0);
    validarParametro(y, 0);

    let s = x;

    while (y <= s) {
        s = s - y;
    }

    return s;
}


function validarParametro(parametro, valorMinimo, valorMaximo) {
    if (parametro == null) {
        throw new TypeError("Parâmetro inválido. O valor é nulo.");
    }

    if (isNaN(parametro)) {
        throw new TypeError("Parâmetro inválido. O valor não é um número.");
    }

    if (!Number.isInteger(parametro)) {
        throw new TypeError("Parâmetro inválido. O valor não é um número inteiro.");
    }

    if (parametro < valorMinimo || parametro > valorMaximo) {
        throw new RangeError("Parâmetro inválido. O valor está fora do intervalo válido.");
    }

}

module.exports = {
    mod: mod,  
};





