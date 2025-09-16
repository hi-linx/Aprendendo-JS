const filmes = [
    {
        id: 1,
        title: "O poderoso chefão",
        director: "Francis Ford Coppola"
    },
    {
        id: 2,
        title: "Um sonho de liberdade",
        director: "Frank Darabont"
    },
    {
        id: 3,
        title: "Drive",
        director: "Nicolas Winding Refn"
    },
    {
        id: 4,
        title: "Interestelar",
        director: "Christopher Nolan"
    },
    {
        id: 5,
        title: "2001: Uma odisseia no espaço",
        director: "Stanley Kubrick"
    }
]

//JSON -> JavaScript Object Notation
//é um formato leve de troca de dados, fácil para ler e escrever
//é um formato de texto, completamente independente de linguagem
//é usado para transmitir dados em aplicações web (ex: enviar dados do servidor para o cliente)

const filmesJSON = JSON.stringify(filmes);
const filmesList = JSON.parse(filmesJSON);

console.log(filmesList);
console.log(filmesJSON);