// Cria uma função declarativa que recebe um argumento (str), se o argumento for uma string vazia ou em branco ela irá retornar true
// e se tiver valores irá retornar false.
function isEmpty(str) {
  return typeof str === 'string' && str.trim() === ''; // Verifica se a string não é vazia. 
  // Verifica se a string é vazia ou contém apenas espaços em branco. O .trim() remove os espaços em branco.
}

// Ex:
console.log('Questão 2')
console.log(isEmpty('')); // String vazia
console.log(isEmpty('   ')); // String com espaços em branco
console.log(isEmpty('abc')); // String com valores
