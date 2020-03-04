/*object - (sera usada a notacao direta de obejeto de inicio)
um objeto e definido por um para de chaves '{}', normalmente se declara
uma variavel para iniciar um objeto. os dados dentro de um obejeto serao 
propriedades do mesmo, tambem podem ser declaradas funcoes, que serao chamadas 
de metodos.
eles se trata de um conjunto chave (identificador) e valor*/
//exemplo

//criando um objeto vazio
const produto1 = {}

{
    //uma das formas de se agregar dados a um objeto
    produto1.nome = "celular do homem de ferro"
    produto1.preco = 4998.90
    console.log(produto1)

    //tambem e possivel declarar um identificador dentro do console.log (ele possuir o valor padrao)

    console.log(produto1.garantia)
    console.log(produto1.garantia = '1 ano',)

}

{
    //uma outra forma de agregar valor que permite espaco na chave, mas nao e recomendada
    produto1["velocidade"] = '3000000 m/s'
    console.log(produto1)
}

{
    //e por ultimo e posivel declara diretamente dentro do obejeto

    const produto2 = {
        nome: 'escudo do capitâo america',
        formato: 'circular',
        cor: 'azul e vermelho',
        preco: '5000.99',

    /*e tambem e possivel declarar um obejeto dentro de outro 
    (mesmo com o mesmo nome, desde que ele seja a unica com esse nome 
    no nivel dela. Isso significa que dentro de um objeto eu posso declarar
    outro com o mesmo nome, mas fora eu nao posso declarar dois obejetos com 
    o memso nome.)*/
        produto2: {
            descricao: 'eu sou uma copia do escudo do Capitão América',

        }

    }
    console.log(produto2)
}

console.log(!!1.0)

const produto2 = {
    nome: "camaro",
    preco: "5000 reais",
}

console.log(produto2.nome.preco)