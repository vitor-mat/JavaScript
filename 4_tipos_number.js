//number é o tipo numerico
const peso3 = 5.0
//exemplos
{
    const peso1 = 1.0
    //outra forma de declarar um number(funcao de string pra number)
    const peso2 = Number('2')
    console.log(peso1,peso2)

/*Number.isIntenger informa se a'variavel'
e do tipo inteiro(admite: nº.0, como verdadeiro.
o unico float admitido)*/
//exemplo:

    console.log (Number.isInteger(peso1))
    console.log (Number.isInteger(peso2))
}
{
    console.log(Number.isInteger(peso3))
}

/*operadores aritméticos:
+ (soma)
- (subtracao)
* (multiplicacao)
/ (divisao)*/
//exemplo:

const avaliacao1 = 10
const avaliacao2 = 10
const total1 = (avaliacao1+avaliacao2)/2
const total2 = (avaliacao1+avaliacao2)/3

console.log(total1)
console.log(typeof total1)
//Number, com 'N' maisculo e uma funcao
//numver, com 'n' minusculo e um tipo
//exemplo:
console.log(typeof Number)

//.toFixed - serve para determinar o numero de casas decimais

{
    console.log(total2)
    console.log(total2.toFixed(3))
}

/*toStringer() - muda a variavel para o tipo string, 
neste caso do tipo number.

.toStringer(2) - além de mudar o tipo para string,
apresenta o numero em codigo binario*/

{
    console.log(total2.toString())
    console.log(total2.toString(2))

}

/*e possivel realizar operacoes direntamente no do console.log

um numero dividido por '0' e igual a infinito.
ja que quanto menor o numero da divisao, 
maior o resultado obtido.*/
//exemplo

{
    console.log(5/0)
}

/*e possivel dividir a string se for um numero.
se a string nao for um numero, ele nao ira reconhece-la,
dizendo que nao e um numero.*/
//exemplo

{
    console.log("10"/2)
    console.log("me divide por três"/3)
}

/*mutiplicar a string de uma palavra por um numero,
nao ira fazer com que a string se repita o tanto de vezes
que o numero indica.
claro que ele retornara NaN (not a number)*/
//exemplo
{
    console.log("eu não vou falar duas vezes"*2)
}

/*no caso do '+' a preferencia e da concatenacao*/
//exemplo
{
    console.log("2"+5)
}
/*algumas operacoes com pontos flutuantes 
não geram um numero exato,
eles retornaram o numero com imprecisao.
o motivo e para evitar certa lentidao.*/
//exemplo

{
    console.log(0.1+0.8)
    console.log(0.1+0.7)
}

/*uma outra forma de aplicar algumas funcoes, e diretamente
no numero desejado, colocando parenteses no mesmo.*/
//exemplo

{   //por alguma razao desconhecida ele arredonda a operacao abaxo
    console.log((0.99999999999999).toFixed(2))
    console.log((3.33333).toFixed(1))
    console.log((10).toString())
}