
/*Ele verifica o if, senao for atendido ele executa o else */

const ImprimirResultado = function (nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado')
    }
}

ImprimirResultado(10)
ImprimirResultado(4)
ImprimirResultado('Epa')//Cuidado

//Como e so uma sentenca voce pode remover as chaves aqui.
/*const ImprimirResultado = function (nota){
    if(nota >= 7)
        console.log('Aprovado!')
    else
        console.log('Reprovado')
}
 */

 //Voce pode encadear varios if (Ele so atendera a uma das condicoes. Uma ou nada, pode colocar um else caso nada seja atendido.)
//prototype ainda vai ser explicado
//Como a variavel esta em Number, foi usado o this (a ser explicado melhor)
 Number.prototype.entre = function(inicio, fim){
     return this >= inicio && this<= fim 
 }

 //o nome da variavel funciona como o nome da funcao
 const imprimirresposta = function (nt){
     if(nt.entre (9,10)){
         console.log('Quador de honrar')
     }else if(nt.entre(7,8.99)){
         console.log('Aprovado')
     }else if (nt.entre(4,6.99)){
         console.log('recuéração')
     }else if (nt.entre(0,3.99)){
         console.log('reprovado')
     }else{
         console.log('nota invalida')
     }
 }

