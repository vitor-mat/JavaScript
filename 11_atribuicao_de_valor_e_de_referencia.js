/*atribuicao por valor - quando a atribuicao e feita de forma primitiva 
(nao um objeto, mas o valor colocado diretamente)(copia por valor).
atribuicao por referencia - quando voce passa o endereco de memoria.
 A variavel nao possui aqueles dados, o que ela possui 
 e o endereco que direciona aqueles dados. entao quealquer variavel que possua 
 esse endereco pode ter acesso e ate modificar os dados, e todas as outras que
 possuirem o mesmo endereco sentirao a mudanca*/

 {
    //atribuicao por referencia - (Ex: objetos e funcoes)
    //exemplo:

    //o objeto nao pertence a ninguem, 'a' tem apenas acesso pelo endereco dele
    const a = {
        name: 'Vitor',
    }
    console.log(a)
    
    const b = a
    console.log(b)

    b.name = 'Vitória Certa',
    console.log(a,b)
 }

{
    //atribuicao por valor - (Ex:nteiro, logico/booleano, texto/string e real/float+inteiro)
    //exemplo:
    
    // o '3' pertence a 'c', nao da pra mudar 'c' indiretamente
    let c = 3
    let d = c
    d++

    console.log(c,d)
}