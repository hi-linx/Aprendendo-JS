let x = 5; // var x = 5

const y = 10; //não posso atribuir valor para o const

x = 12;

console.log(x); 

if(true){ //não mistura com o escopo global
    let x = 20;

    const y = 60;

    console.log(y);
}

console.log(x); 