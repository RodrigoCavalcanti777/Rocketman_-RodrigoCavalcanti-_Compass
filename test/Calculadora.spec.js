import assert from 'assert'
import chai from 'chai';
import Calculadora from '../src/Calculadora.js';

const expect = chai.expect;


describe('Verificar Soma', () => {
    it.only('Soma de a+b com solução de ab', () => {
        let resultado = Calculadora.soma(2, 2)
        expect(resultado).to.be.eq(4);
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