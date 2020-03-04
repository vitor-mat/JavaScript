/*No jJavaScript uma variavel (var) e global, quando esta fora de uma funcao, mesmo dentro de 
blocos(escopos), ou e particular quando ta detro de uma funcao (e recomendado evitar o uso de 
variraveis (var) de forma global para evitar erros)*/
//var tem escopo global e de bloco

var numero = 2
{
    var numero = 3
    console.log("dentro =", numero)
}
console.log("fora =" + numero)

//Loop com var
/*Loop com for
Ex:
for (palavra reservada) (var i = 0 (declaracao de variaveis); i < 10 (condicao); i++ (incremento))*/

for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log(`i = ${i}`)
/*A variavel i pode sair do bloco quando completa 10, porque ela quebra a 
condicao, e ela pode ser exibida fora do bloco ja que ela possui um carater de escopo global*/

const func = []
for (var i = 0; i < 10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[8]()
func[2]()
/*Foi chamados os indices do arry dessa forma ja que eles sao funcoes*/
/*Foi criado um loop que adiciona funcoes ao array, e o comando da funcao e imprimir a variavel i*/
/*O i e impresso como 10, porque no array sao adicionados funcoes que imprimem o valor de i, como ele sai 
do loop com o valor 10 e e uma var ele acaba saindo da chave e ocupoando todo o i existente,. 
O que nao aconteceria com o let por ele ter escopo de let, e a funcao ter uma caracteristica de memoria.
Cada repeticao e tratado um bloco separado e um bloco ao mesmo tempo que o var nao respeita 
e o valor final oculpa todos.*/