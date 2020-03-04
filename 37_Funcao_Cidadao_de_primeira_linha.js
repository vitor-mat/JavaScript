/*Voce pode trabalhar funcoes como dados:
(Termos que falam disso)

    - First class object (Citizens)
    - higher-order function (principios de funcao funcional)
    - cidadai de primeira linha

Isso permite operar funcoes de diversas formas.
*/

//Declarar uma funcao de forma literal (retorna um valor e opcional, o padrao e undefined)
//Obs (funcao vazia. E o bloco e obrigatorio)
function fun1(){}


//Armazenar numa variavel
//funcao anonima. Voce pode chama-la pelo nome da variavel/constante mais o parenteses
const fun2 = function(){
    console.log('eu sai')
}

//Armazenar em um array

const array = [function(a, b){return a+b}, fun1, fun2/*sem o paremtese ele nao vai ser executado, mas ta guardada*/]

//Executando funcoes dentro do array
console.log(array[2])//mostra que tem uma funcao guardad
console.log(array[2]())//retorna undefined porque nao tem nada para ser retornado
console.log(array[0](1,2))

//Armazenar em um atributo de um objeto

const obj = {}
obj.falar = function(){return 'Opa'}
//Como e uma funcao precisa do parenteses
console.log(obj.falar())

//Funcao como parametros

//Aqui o parametro nao exeite, e apenas o nome. Dentro eu mostro que espero que seja uma funcao.
function run(fun){
    fun()
}

 //Aqui eu passei os dados para denro do parametro. E como se fun fosse uma variavel e eu guardei uma funcao dentro dela e chamei ela.
 //Foi tudo feito de forma dinamica, quando eu chamei run, ao mesmo tempo eu passei os dados pra fun e ai pude executa-la atraveis da run.
run(function (){console.log('Executando...')})

//Funcao retornada
//Uma funcao pode retornar outra funcao. Ou seja uma funcao tambem pode estar dentro de outra funcao

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

//soma(2,3). Como o resultado e uma funcao eu coloco o novo paraentes para a funcao de dentro

soma(2,3)(4)
//ou
//armazena a primeira e apartir da variavel/constante executa a segunda
const cincomais = soma(2,3)
cincomais(4)