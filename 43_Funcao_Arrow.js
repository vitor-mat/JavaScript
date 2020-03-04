
let dobro = function (a){
    return 2 * a
}

/*Funcao arrow sempre e uma funcao anonima, para chama-la deposi voce deve 
armazenar ela numa variavel ou numa constante. */

dobro = (a) => {
    return 2 * a
}

//Quando tem apena um parametro. Quando e tudo numa linha
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function(){
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' //possui um parametro. Para deixar ainda mais curta
console.log(ola())