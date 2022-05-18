import assert from 'assert'
import chai from 'chai';
import Calculadora from '../src/Calculadora.js';

const expect = chai.expect;


describe('Verificar Soma', () => {
    it('Soma de a+b com solução de ab', () => {
        let resultado = Calculadora.soma(2, 2)
        expect(resultado).to.be.eq(4);
    })
    it.only('soma de -a+b com solução de maior valor permanece o sinal', () => {
        let resultado = Calculadora.soma(-4, 8);
        expect(resultado).to.be.eq(4);
    })
})

describe('Verificar Subtração', () => {
    it.only('Subttração de a-b', () => {
        let resultado = Calculadora.sub(5, 5)
        expect(resultado).to.be.equal(0);
    })
})

describe('Verificação de Média', () => {
    it.only('Media de a,b', () => {
        let resultado = Calculadora.media(6, 6)
        expect(resultado).to.be.eq(6)
    })
})
describe('meu primeiro teste', () => {
    it('Verificar a Váriavel Auxiliar', () => {
        let aux = 2;
        // assert.strictEqual(aux, 2)
        expect(aux).to.be.equals(2);
        expect(aux).to.be.a('number');

    })
    it('Verificar Outra Igualdade', () => {
        let aux = 'carro';
        assert.strictEqual(aux, 'carro')
    })

})

describe('Meu Segundo teste', () => {
    it('Verificar Desigualdade', () => {
        let aux = 2
        assert.notStrictEqual(aux, '2')
    })
    it('Verificar outra Desigualdade', () => {
        let aux = 'carro'
        assert.notStrictEqual(aux, 'charrete')
    })
})