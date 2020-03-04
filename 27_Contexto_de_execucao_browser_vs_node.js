//Navegador

 /*this e estritamente igual ao objeto window.
 window e um dos principais objetos da arvore dom e ele guarda diversos elementos e funcoes.*/

 //Uma das estanhesas do javascript e que o this pode variar a sua visao geral de acordo de onde ele aparecer
 /*Por exemplo: se ele ta livre no console do navegador ele funciona como window, mas se ele ta dentro de um objeto, 
 por exemplo, ele mantera a mesma funcao mas limitado aquel objeto, como se o objeto fosse o novo mundo pra ele, ele se 
 torna como um window do objeto. */

 /*Evite utilizar var, porque ela possui a caracteristica de escopo global, ou seja, qualquer um em qualquer canto 
 pode modifica-la, o que pode gerar muita desgraça pro seu codigo.*/
 /*De modo diferent let e const nao ficam no escopo global, num navegador voce nao pode acessala do window, mas pode 
 chama-la diretamente de seu local.*/

 //Pro node, o global equivale ao window. E o this e estritamente igual ao module.export

//Diferente do navegador que todo mundo costuma ficar no window, o node faz separacao por module export

/*Quando você declara uma variavel diretamente, sem let, var ou const, voce  a esta colocando no contexto global do node. 
Nao e recomendavel que se faca isso. */
a = 13 //nao faca isso!!!