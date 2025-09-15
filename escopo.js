var x = 1; //escopo global

function teste(){

var z = 0;

console.log(z); //escopo local 

}

teste();

//apenas o escopo global consegue entrar em funções

function testando(){

    var z = 34;

    console.log(z); //escopo local não se misturam com outros escopos 

}

//if não limita o escopo no seu bloco

//o isolamento de escopo se da geralmente em if e funções 