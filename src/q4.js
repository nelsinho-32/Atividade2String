// Cria uma função declarativa que recebe dois argumentos (str, n), onde o primeiro é uma string e o segundo é um número.
function initCut(str, num) {
  return str.slice(0, num); // Vai pegar os elementos na string de 0 à num onde (num) vai ser passado como argumento para 
  // saber até onde irá pegar. E se o número for maior que a string, ele irá pegar até o final da string.
}

// Ex:
console.log('Questão 4')
console.log(initCut("Round Robin", 4)); // "Roun"
console.log(initCut("Round Robin", 12)); // "Round Robin"
