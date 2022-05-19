

export default class Calculadora {

    static soma(a, b) {
        return a + b;
    }
    static somaArray([a, b, c]) {
        let array = [a, b, c];
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    static sub(a, b) {
        return a - b;
    }

    static subArray([a, b, c]) {
        let array = [a, b, c];
        let Sum = 0;
        for (let i = 0; i < array.length; i++) {
            Sum = array[i] - Sum
        }
       return Sum;
    }

    static multi(a, b) {
        return a * b;
    }

    static div(a, b) {
        return a / b;
    }

    static media(a, b, somamed) {
        somamed = a + b;
        let mediatot = somamed / 2;
        return mediatot;

    }

    static Dobro(a, valorDob) {
        valorDob = a * a;
        let ValorDobro = valorDob;
        return ValorDobro;
    }

    static Potencia(a, b) {
        let pot = Math.pow(a, b)
        return pot;
    }

    static RaizQuadrada(a, Valorraiz) {
        Valorraiz = Math.sqrt(a);
        let resultado = Valorraiz;
        return resultado;

    }

}