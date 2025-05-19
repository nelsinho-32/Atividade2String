// Cria uma funcão declarativa que recebe um argumento (name), que vai ser uma string e irá retornar 
// o primeiro nome e a primeira letra do sobrenome seguido de um ponto.
function abbrevName(name) {
  const divideName = name.split(' '); // Divide a string em partes usando o espaço como limite.
  if (divideName.length < 2) { // Verifica se há apenas um nome
    return name; // Se não houver sobrenome, retorna como está
  }; 
  return `${divideName[0]} ${divideName[1][0]}.`; // Retorna o primeiro nome (divideName[0]) buscou no array 
  // que o split gerou, o primeiro nome. Depois buscou o sobrenome (divideName[1]) e pegou a primeira letra do 
  // sobrenome (divideName[1][0]) e adicionou um ponto.
}

// Ex:
console.log('Questão 5')
console.log(abbrevName("Robin Hood")); // "Robin H."
console.log(abbrevName("Nelson")); // "Nelson"
