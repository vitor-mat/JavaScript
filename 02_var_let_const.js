//var, let e const

/*exemplo:

(var ou let ou const) + identificador (nome) + simbolo de atribuicao (=) + valor*/
// não adimite espaco no identificado
//exemplo:

var a = 3
let b = 4

console.log(a,b)

/*evite var e use let, 
são variaveis mas let tem vantagens (a ser explicadas)*/

//e possivel redeclarar uma variavel
//exemplo:

//'var a', ja foi declarado acima
var a = 4

console.log(a)

//o mesmo não funciona pra let e para const

//a diferença de const para as demais é que ela nao pode mudar o seu valor
/*por isso procure sempre usar const 
para evitar erro no codigo ou
confusão na declaracao de variaveis.
no momento em que precisar mudar um valor numa const,
entao voce muda para var ou let (o recomendado e let)*/

const c = "legal"

console.log(c)

//use nomes claros pra variaveis e contanste
//evite nomes genericos e siglas