//Nuevo idioma
export default function platzom(str){//args str
	let translation = str //el string no se modifica con los metodos
	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0,-2)//desde el inicio corta dos ultimos caracteres
	}
	//pasar a minuscula y empieza con z
	if(str.toLowerCase().startsWith('z')){
		translation += 'pe' //lo que ya tenia mas pe
	}
	if(str.length >= 10){
		const firstHalf = translation.slice(0,Math.round(length / 2))
		//cortar de la mitad hasta el final
		const secondHalf = translation.slice(Math.round(length / 2))
		translation = `${firstHalf}-${secondHalf}`
	}
	//si es palindromo reglas anterirores no cuentan
	//split separa los caracteres en un arreglo
		//reverse le da vuelta al arreglo
		//junto los caracteres en un string
	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str) {
		const length = str.length
		let translation = ''
		let capitalize = true
		//for si i < length se ejecuta el loop
		for (let i=0; i < length; i++ ){
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}

	if(str == reverse(str)){
		return minMay(str)
	}

	return translation
}

