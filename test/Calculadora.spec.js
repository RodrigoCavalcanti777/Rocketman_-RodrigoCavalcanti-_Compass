import assert from 'assert'
import chai from 'chai';
import Calculadora from '../src/Calculadora.js';

const expect = chai.expect;

//Verificar Soma
describe('Verificar Soma', () => {
    it('Soma de a+b com solução de ab', () => {
        let resultado = Calculadora.soma(2, 2)
        expect(resultado).to.be.eq(4);
    })
    it('soma de -a+b com solução de maior valor permanece o sinal', () => {
        let resultado = Calculadora.soma(-10, 8);
        expect(resultado).to.be.eq(-2);
    })
    it('soma de -a + -b', () => {
        let resultado = Calculadora.soma(-4, -8);
        expect(resultado).to.be.eq(-12);
    })

})
//Verificar Subtrtação
describe('Verificar Subtração', () => {
    it('Subttração de a-b', () => {
        let resultado = Calculadora.sub(5, 5)
        expect(resultado).to.be.equal(0);
    })
    it('Subttração de -a-b', () => {
        let resultado = Calculadora.sub(-5, -5)
        expect(resultado).to.be.equal(0);
        //valor dado com '0' porque o - da fórmula conta.
    })
})
//Verificar Multiplicação
describe('Verificar Multiplicação', () => {
    it('Multiplicação de a * b', () => {
        let resultado = Calculadora.multi(5, 5)
        expect(resultado).to.be.equal(25);

    })
    it('Multiplicação com Valores negativos', () => {
        let resultado = Calculadora.multi(-5, -2);
        expect(resultado).to.be.equal(10);
    })
    it('Multiplicação com Valores negativos', () => {
        let resultado = Calculadora.multi(-5, 3);
        expect(resultado).to.be.equal(-15);
    })
})
//Verificar Divisão
describe('Verificar Divisão', () => {
    it('Divisão de a / b', () => {
        let resultado = Calculadora.div(2, 2)
        expect(resultado).to.be.equal(1);
    })
    it('Divisão de a / b quando um valor for 0', () => {
        let resultado = Calculadora.div(2, 0)
        expect(resultado).to.be.eq(Infinity);
    })
})
//Verificar média
describe('Verificação de Média', () => {
    it('Media de a,b', () => {
        let resultado = Calculadora.media(6, 6)
        expect(resultado).to.be.eq(6)
    })
    it('media quando um elemento for 0', () => {

        let resultado = Calculadora.media(0, 2)
        expect(resultado).to.be.equals(1);
    })
    it('media de quando os elementos forem 0 e 0', () => {
        let resultado = Calculadora.media(0, 0);
        expect(resultado).to.be.equals(0);
    })

});
//Verificar Soma de um array
describe('Verificação de soma array', () => {
    it('soma de elementos do array', () => {
        let resultado = Calculadora.somaArray([5, 5, 5])
        expect(resultado).to.be.eq(15)
    })
})
//Verificar subtração de um Array
describe('Verificação de subtração de um array', () => {
    it('subtração de elementos do array', () => {
        let resultado = Calculadora.subArray([1, 2, 5])
        expect(resultado).to.be.equal(4)
    })
})
//Verificar Dobro de um valor
describe('Verificação do dobro de um Valor', () => {
    it('dobro de um elementos ', () => {
        let result = Calculadora.Dobro(2)
        expect(result).to.be.eq(4)
    })
    it('dobro de um elemento negativo ', () => {
        let result = Calculadora.Dobro(-8)
        expect(result).to.be.eq(64)
    })
})
//Verificar Potência
describe('Verificação de Potência', () => {
    it('Potência de um elemento', () => {
        let result = Calculadora.Potencia(2, 3)
        expect(result).to.be.equal(8)

    })
    it('Potência de um com valor mais alto elemento', () => {
        let result = Calculadora.Potencia(12, 2)
        expect(result).to.be.equal(144)

    })
    //Verificar Raiz quadrada

    describe('Verificar Raiz quadrada', () => {
        it('Raiz Quadrada', () => {
            let result = Calculadora.RaizQuadrada(4)
            expect(result).to.be.equal(2);
        })
     
    })


})