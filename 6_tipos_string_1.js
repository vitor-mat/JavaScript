/*string e uma cadeia de caracteres, que pode ser declarada 
(delimitada) por:
"string" aspas duplas
'string' aspas simples
`string` simbolo da crase (tamplet string)*/

const escola = "cod3r"

console.log(escola)
console.log("cod3r")

/*.charAt serve para indicar uma letra
dentro de uma string, apartir do seu
indice (o indice comeca no '0')*/
//exemplo

{
    console.log(escola.charAt(0))
    console.log(escola.charAt(2))
//se o indice pedido nao tiver nada ele retorna um espaco vazio
    console.log(escola.charAt(10))
}

/*.charCodeAt ele retorna o codigo da tabela unicode
do carctere*/
//exemplo

{
    console.log(escola.charCodeAt(3))
}

/*.indexOf informa, se houver, o indice do caractere 
da string, informado nos parametros.
o caractere deve ser pedido semelhante a declaracao de uma string,
ou seja, entre aspas ou qualquer uma das outras formas.

se o caractere pedido nao hover na minha string,
ou se o caractere for repetido na palavra,
o valor retornado sera '-1'.*/
//exemplo

{
    console.log(escola.indexOf(`c`))
    console.log(escola.indexOf('v'))
    const letrarepetida = "ovo"
    console.log(letrarepetida.indexOf("0"))
}

/*.substring permite determinar qual a sequencia de indices
que devem aparecer. levando em conta que 
o primeiro informado aparecera, mas o ultimo nao.
outra forma de visulizar e que:
o primeiro parametro informa o ponto de partida
e o segundoo quantos caracteres devem ser mostrados.

parametro(0,0) retorna espaco vazio.
e quando o ultimo parametro execede a string 
ele informa a string completa.*/
//exemplo

{
    console.log(escola.substring(0,0))
    console.log(escola.substring(0,3))
    console.log(escola.substring(0,5))
}

/*.replace serve para substituir um caractere.
o primeiro parametro e o caractere a ser substituido
e o segundo e quem vai substituilo.
amabos parametros devem ser informados como string,
e a substituicao nao esta limitada a um caractere por vez,
pode inclusive ser toda a string por uma nova.
se o caractere a ser substituido não houver na minha string,
ela sera exibida normalmente.

obs: atraves de regex, e possivel aplicar 
a substituicao em todos os caracters. (exprcao regular)*/
//exemplo

{
    console.log(escola.replace("c","eu"))
}

/*.split transforma uma string em uma array.
os parametros deveram informar o separador,
e devem ser informados como uma string*/
//exemplo

{
//separa todos os caracteres
    console.log(escola.split(""))
// separa pelos espacos na string
    console.log(escola.split(","))
/*informa quantos indices devem haver no array (independe de como se separa)
se houver mais indices do que o possivel, apenas o possivel sera utilizado*/
    console.log(escola.split("", 3))
//separa por espaco
    console.log(escola.split(" "))
//separa apartir do '@', que não fara parte do aary
    console.log('usuarioa@gmail.com'.split("@"))
}

/*concatenacao e juntar var/const/let ,
com um string.
pode ser feita atraves de :
.concatA
+ (preferencia ao inves da operacao aritimetica)
, (já da um espaco entre o anterior)

os espacos devem ser dados dentro da declarcao da string*/

{
    console.log("escola".concat(escola).concat("!"))
    console.log("escola "+escola+"!")
    console.log("escola "+escola.replace("3","e")+"!")
    console.log("escola",escola.replace("3","e"),"!")
}