/*undefined -  e o valor padrao para um identicficador declarado 
ou array que ainda nao se definu um valor especifico.
(evite usar-lo ja que e padrao, quando quiser 'zerar' uma 'variavel' use null)
null - torna a variavel desejada vazia, diferente de undefined, esta definido 
que ela 'deve ser algo vazio, que nao tenha endereco ou valor, que nao aponte para lugar nenhum' 
(pode ser algo para 'zerar' uma 'variavel', para diferenciar '0' de 'vazio/invalida'
ou torna-la invalida).*/

/*undefined 

obs: e diferente de 'it is not defined', que acontece quando de chama uma variavel que nao 
foi declarada, ou qualquer outra coisa (como exemplo abaixo valor2 ou valor3)*/
{
    const valor
    console.log(valor)
    valor = undefined //nao recomendado

    valor2
    //ou
    //console.log(valor3)
}

/*nulo - 

obs: tenta operar uma 'variavel' de valor nulo gera erro (ReferenceError)(impossibilidade de se operar),
por isso e sempre bom se ter um valor padrao para as variaveis que se trabalha (ainda preciso 
aprender bem sobre isso).*/
{
    let valor2 = 'Ja tive algum valor'
    console.log(valor2)
    valor2 = null
    console.log(typeof valor2)
}

//TypeErro - pode aparecer quando se tenta usar uma variavel nula 