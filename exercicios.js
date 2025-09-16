/*
Exercícios - Arrays

1. Crie um array com 5 tarefas que você precisa realizar hoje.
2. Adicione mais 2 tarefas no final do array.
3. Remova a última tarefa do array.
4. Exiba o array final no console.
*/

console.log("Exercícios - Arrays");

const tarefas = ["Cozinhar", "Varrer", "Estudar", "Ler", "Exercitar"];
tarefas.push("Dormir", "Jogar");
console.log(tarefas);

tarefas.pop();
console.log(tarefas);

/*
Exercicio - If/Else + Operadores de Comparação

Peça um número ao usuário (via prompt) e diga se ele é par ou ímpar.
Peça a idade e diga se a pessoa é maior de idade.
*/

console.log("Exercícios - If/Else + Operadores de Comparação");

let numero = prompt("Digite sua idade: ");
numero = Number(numero);

if(numero >= 18){
    console.log("Você é maior de idade");
}
else{
    console.log("Você é menor de idade");
}

/* 

For / While

Imprima todos os números de 1 a 20 usando for.
Crie um loop while que peça nomes ao usuário até ele digitar "sair".

*/

console.log("Exercícios - For / While");

let i;
for(i = 0; i <= 20; i++){
    console.log(i);
}

let nome = "";
while(nome.toLowerCase() !== "sair"){ // .toLowerCase() para aceitar "sair" em qualquer combinação de maiúsculas/minúsculas
    nome = prompt("Digite um nome (ou 'sair' para encerrar): ");
    console.log("Você digitou: " + nome);
}

/*

Funções

Escreva uma função soma(a, b) que retorne a soma dos dois números.
Escreva uma função que receba um array de números e retorne apenas os pares.

*/

console.log("Exercícios - Funções");

let number = Number(prompt("Digite um número: "));
let number2 = Number(prompt("Digite outro número: "));

function soma(a, b){
    return a + b;
}

console.log("A soma é: " + soma(number, number2));

/*

Objetos e JSON

Crie um objeto aluno com nome, idade e curso.
Converta esse objeto em JSON com JSON.stringify e exiba no console.
Converta de volta para objeto usando JSON.parse.

*/

console.log("Exercícios - Objetos e JSON");

const aluno = {
    name: "Lucas",
    age: "17",
    course: "Desenvolvimento Web"
}

const alunoJson = JSON.stringify(aluno);
const alunosList = JSON.parse(alunoJson);

console.log(alunoJson);
console.log(alunosList);

/*

6. Map / Filter / Reduce

Use map para transformar um array de preços em preços com desconto (ex: 10%).
Use filter para pegar só números maiores que 50 de um array.
Use reduce para somar todos os números de um array.

*/

// Map
console.log("Exercícios - Map");
const precos = [100, 200, 300, 400, 500];
const precosDesconto = precos.map(function(precos){
    return precos * 0.9; 
})

console.log(precosDesconto);

// Filter
console.log("Exercícios - Filter");
const numeros = [0, 5, 10, 25, 50, 75, 100, 150, 200, 250]
const filterNumber = numeros.filter(function(numeros){
    return numeros > 50
})

console.log(filterNumber);

// Reduce
console.log("Exercícios - Reduce");
const somaNumeros = numeros.reduce(function(accumulator, numeros){
    return accumulator + numeros;
},0);

console.log(somaNumeros);

/*

7. Projeto Integrado

Crie uma lista de objetos tarefas (id, descrição, concluída).
Mostre apenas as tarefas concluídas (com filter).
Mostre quantas tarefas ainda faltam (com reduce).
Transforme tudo em JSON e exiba

*/

console.log("Exercícios - Projeto Integrado");

const tarefasDoProjeto = [
    {
        id: 1, 
        description: "Cozinhar",
        isCompleted: true
    },
    {
        id: 2, 
        description: "Varrer",
        isCompleted: false
    },
    {
        id: 3,
        description: "Estudar",
        isCompleted: true
    },
    {
        id: 4,
        description: "Ler",
        isCompleted: false
    },
    {
        id: 5,
        description: "Exercitar",
        isCompleted: true
    }
]

const tarefasConcluidas = tarefasDoProjeto.filter(function(tarefasDoProjeto){
    return tarefasDoProjeto.isCompleted === true;
})

console.log("Tarefas do Projeto: ", tarefasDoProjeto);

console.log("Tarefas concluídas: ", tarefasConcluidas);

const faltantes = tarefasDoProjeto.reduce(function(accumulator, tarefasDoProjeto){
    return accumulator + (tarefasDoProjeto.isCompleted === false ? 1 : 0);
},0);

console.log("Tarefas faltantes: ", faltantes);