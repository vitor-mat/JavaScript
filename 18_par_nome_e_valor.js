//Nome = identificador = chave e valor
//Ex: const/var/let (nome) = valor
//contexto lexico e a posicao fisica aonde a variavel/constante e definida no codigo

const saudacao = 'opa' //contexto lexico 1

function exec(){
    const saudacao = 'bom dia' //const lexico 2
    return saudacao
    /*Ele vai procurar primeiro a sudacao dentro de function, senao encontrar ele passara para um 
    contexto mais abrangente.*/
}

console.log(saudacao)
console.log(exec())

//Objetos sao grupos aninhados de nome e valor

const client = {
    nome: 'jose',
    idade: 32,
    peso: 75,
    endereco: {
        logradouro: 'rua muito legal',
        numero: 123,
        /*Voce pode ter os mesmos nomes aqui dentro que os que estao apenas em cliente, porque seria ja e 
        um novo contexto lexico.*/
    }
}
/*E possivel usar os mesmos nomes para contextos lexicos diferentes. So seria possivel declarar duas 
coisas iguais no mesmo contextos lexicos se elas forem var, e uma sobrescreveria a outra.*/
