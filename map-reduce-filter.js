//Map
console.log("Map")
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map -> vai executar uma função em cada elemento do array e retornar um novo array com os elementos modificados
const numbersMultipliedByTwo = number.map(function (number) {
  return number * 2; //cria a variavel number e multiplica por 2
});

console.log(numbersMultipliedByTwo);

console.log("Filter")
//Filter
const ages = [8, 13, 27, 30, 22, 40];
//filter -> vai filtrar o array e retornar um novo array com os elementos que passaram no teste

const evenAges = ages.filter(function (age) {
  return age % 2 == 0; //filtra as idades pares
});

console.log(evenAges);

console.log("Reduce")
//Reduce -> vai reduzir o array a um único valor
// usado quando precisamos de um valor único a partir de um array
//accumulator -> acumulador -> vai acumulando o valor
const sumOfAges = ages.reduce(function (age, accumulator) {
  return accumulator + age; //soma o acumulador com a idade
}, 0); //0 é o valor inicial do acumulador

console.log(sumOfAges);

/* ======================Exercícios======================*/

console.log("Exercícios Reduce");

console.log("Soma do lançamentos de foguetes por país");
const rockets = [
  { country: "Russia", launches: 32 },
  { country: "USA", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
];

// const totalLaunches = rockets.reduce(function(accumulator, rockets){
//     return accumulator + rockets.launches
// },0);

//mesma coisa que a função acima só que com arrow function

const totalLaunches = rockets.reduce(
  (accumulator, rockets) => accumulator + rockets.launches,
  0
);
console.log(totalLaunches);

console.log("Exercicio 2 - Somar todos os numeros de 1 a 50");

const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];
const sumOfNumeros = numeros.reduce(function(accumulator, numeros){
    return accumulator + numeros;
},0);

console.log(sumOfNumeros);

console.log("Exercicio 3 - Somar todos os numeros pares de 1 a 50");

const evenNumeros = numeros.filter(function(numeros){
    return numeros % 2 == 0;
})

const sumOfEvenNumeros = evenNumeros.reduce(function(accumulator, evenNumeros){
    return accumulator + evenNumeros;
},0);

console.log(sumOfEvenNumeros);

console.log("Exercicio 4 - Somar todos os numeros impares de 1 a 50");

const oddNumeros = numeros.filter(function(numeros){
    return numeros % 2 != 0;
})

const sumOfOddNumeros = oddNumeros.reduce(function(accumulator, oddNumeros){
    return accumulator + oddNumeros;
},0);

console.log(sumOfOddNumeros);

