/*Uma objeto pode ser criado a partir de uma funcao. Ele serve pra dar a mesma class (outra 
forma decriar uma funcao) para objetos diferentes (instancia - uma copia da funçao vira um objeto). 
Uma utilidade seria executar dados diferentes a partir de uma mesma funcao para cada usuario, 
como criar o object (par de nome e valor) para cada um deles*/

/*Exemplo:

Suponha que você quer criar um tipo de objeto para cadastro. Você quer que esse tipo de objeto se chame 
Cadastro, e quer que ele tenha propriedade para nome, endereco e idade. Para fazer isso, você escreveria 
a função a seguir:

function Cadastro(nome, endereco, idade) {
  this.nome = nome;
  this.endereco = endereco;
  this.idade = idade;
}
Agora você pode criar um objeto chamado meuCadastro como a seguir:

var meuCadastro = new Cadastro("Jose", "Rua A", 20);*/

//Voce pode utilizar a palavra reservada new para criar uma instancia (seria criar um objeto nesse caso), a partir da função
console.log(typeof Object)
console.log(typeof new Object)
//forma alternativa, que dá na mesma coisa
console.log(new object ())

const client = function(){}
console.log(typeof client)
console.log(typeof new client)

class produto {}//funcao criada a apartir da "class"
console.log(typeof produto)
console.log(typeof new produto)