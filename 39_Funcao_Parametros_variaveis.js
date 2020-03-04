//Ele nao receber parametros nao quer dizer que ele nao va recebe-los mais afrente. E voce pode recupera-los atraves propriedade chamada 'argument'.
function soma(){
    let soma = 0
    for(let i in arguments){
        soma += arguments[i]
    }
    return soma
}

/*Arguments e um array interno dispónivel em toda a funcao. Voce pode colocar 
os parametros dentro dele e brincar da forma que quiser (e puder). */

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('a','b', 'c'))