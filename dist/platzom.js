"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = platzom;

//Nuevo idioma
function platzom(str) {
  //args str
  var translation = str; //el string no se modifica con los metodos

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2); //desde el inicio corta dos ultimos caracteres
  } //pasar a minuscula y empieza con z


  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'; //lo que ya tenia mas pe
  }

  if (str.length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2)); //cortar de la mitad hasta el final

    var secondHalf = translation.slice(Math.round(length / 2));
    translation = "".concat(firstHalf, "-").concat(secondHalf);
  } //si es palindromo reglas anterirores no cuentan
  //split separa los caracteres en un arreglo
  //reverse le da vuelta al arreglo
  //junto los caracteres en un string


  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true; //for si i < length se ejecuta el loop

    for (var i = 0; i < length; i++) {
      var _char = str.charAt(i);

      translation += capitalize ? _char.toUpperCase() : _char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}