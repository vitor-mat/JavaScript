console.log('this e bind 1---------------------------')

const pessoa1 = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

//Neste caso e executado por falar dentro do objeto onde tudo existe
pessoa1.falar()


/*
Gera um erro porque o this mudou de contexto
Neste caso da undefined, porque nao existe a saudacao para o contexto da constante.
*/

const falar = pessoa1.falar
falar()

//Com o bind, nos determinamos o contexto, por exemplo escolhemos um objeto de onde estaria a funcao.
const falarDePessoa = pessoa1.falar.bind(pessoa1)
 
console.log('this e bind 2-----------------------')

//No momento que eu criar um objeto a partir dessa funcao eu vou ter os atributos com this disponiveis.
function pessoa2(){
    this.idade = 0

        //outa tecnica alem do bind

        const self = this //Vai ser o this de this.idade por esta no mesmo contexto lexico
        
        //para o self, voce usaria

    //fica disparando uma funcao inserida com um intervalo determinado
    setInterval(function (){
        this.idade++
        //console,log(self.idade)
        console.log(this.idade)
    }.bind(this), 1000) //Como ele esta dentro de onde eu quero, posso colocar apenas o this
}

//Criando objeto a partir da funcao
//sem o this ele apontaria pra dentro da funcao que esta dentro do setInterval e nao encontraria o this.idade de fora.

new pessoa2