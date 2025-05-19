// Cria uma função declarativa que recebe um argumento (str), que vai ser uma string e irá retornar um array com os valores
// da string separados, virando um elemento do array.
function toArray(str) {
  return str.split(' '); // Divide uma string quando encontra um espaço em branco, tornando um elemento do array.
}

// Ex:
console.log('Questão 3')
console.log(toArray("Round Robin")); // ["Round", "Robin"] ela encontrou um espaço em branco e separou em dois elementos em um array.
