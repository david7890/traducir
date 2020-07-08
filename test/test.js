
const expect = require('chai').expect
const platzom = require('..').default
describe('#platzom', function(){
	it('se quitan letras ar', function (){
		const translation = platzom('programar')
		expect(translation).to.equal('program')

	})
	it('inicia con z', function (){
		const translation = platzom("zorro")
		const translation1 = platzom("zarpar")

		expect(translation).to.equal("zorrope")
		expect(translation1).to.equal("zarppe")
		
	})
	it('palindromo escribe mayusc min', function (){
		const trans = platzom("tenet")
		expect(trans).to.equal("TeNeT")
	})
	it('mas de 10 letras', function (){
		const trans = platzom("abecedario")

		expect(trans).to.equal("abece-dario")
	})
})