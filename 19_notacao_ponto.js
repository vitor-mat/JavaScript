/*E utilizada para acessar atributos de uma funcao e funcoes dentro de objetos.*/

console.log(typeof console)
console.log(Math.ceil(6.5))//Arredonda um valor para cima
console.log(Math.floor(6.5))//Arredonda um valor para baixo

//Para adicionar atributos a um objeto

const obj = {}
obj.nome = 'bola'
obj['cor'] = 'azul' //notacao tb valida (nao e parte do objetivo da aula).
obj['nome'] = 'carro' /*aqui ele sobreescreve o esse atributo declarado previamente. 
(nao e parte do objetivo da aula)*/

console.log(obj)

function obj1(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('exec...')
    }
    /*this instancia (um valor recebido existira para aquele momento, para aquela 'realidade) o nome 
    recebido como parametro da funcao, ao respectivo objeto. Ele sera pubico para quem o criar. 
    Por ser umthis, ele existira fora das chaves*/
}

const obj2 = new obj1 ('cadeira')
const obj3 = new obj1 ('mesa')
console.log(obj2)
console.log(obj2.nome)//Ele exibi o que foi instanciado para obj1 em obj2.
console.log(obj3)
console.log(obj3.nome)//Ele exibi o que foi instanciado para bj1 em obj3.
obj2.exec() /*Com o this voce pode tanto exibir atributos de um objeto quanto funcoes instanciadas.*/