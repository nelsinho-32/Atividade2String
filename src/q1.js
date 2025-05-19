// Cria uma função declarativa que recebe um argumento (str), se o argumento for uma string ela irá retornar true
// e se não for irá retornar false.

function isString(str) {
  return typeof str === 'string'; // Verifica com o operador typeof se o argumento é uma string e retorna o valor booleano.
}

// Ex:
console.log('Questão 1')
console.log(isString('w3resource')); // retorna o valor true, pois o argumento é uma string. Por ta com as as aspas.
console.log(isString([1, 2, 4, 0])); // retorna o valor false, pois o argumento é um array. Por ta com os colchetes.
