import assert from 'assert'
import chai from 'chai';

const expect = chai.expect;


describe('meu primeiro teste', () => {
    it.only('Verificar a Váriavel Auxiliar', () => {
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