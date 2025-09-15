const person = {
  firstName: "Lucas",
  lastName: "Balbi",
  age: "17",
  hobbies: ["jogar", "violão", "filmes"],
  dog: {
    name: "Rex",
    age: 4,
  },
  //posso usar um objeto dentro de outro objeto
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// Destructuring
const { firstName: primeiroNome, lastName: ultimoNome, age, hobbies, 
    dog: {name: dogName} } = person;

console.log(primeiroNome, ultimoNome);
console.log(age);
console.log(hobbies[2]);

console.log(dogName);
console.log(person.dog.age);
/* =========================== lista com objetos ======================*/

const toDo = [
    {
        id: 1,
        description: "Estudar JavaScript",
        isCompleted: false
    },
    {
        id: 2,
        description: "Ler um livro",
        isCompleted: true
    },
    {
        id: 3,
        description: "Fazer exercícios",
        isCompleted: true
    }
];

// const descriptionOfLastToDo = toDo[2].description;
// console.log(descriptionOfLastToDo);

console.log(toDo[2].description);

//retorna os elementos em que o isCompleted é true
const find = toDo.find(function(toDo){
    return toDo.isCompleted === true;
}) //find -> retorna o primeiro elemento que satisfaz a condição

console.log(find);