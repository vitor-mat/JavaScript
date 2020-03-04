function tratarErroELancar(erro){
    throw new Error ('...')
    /*Aqui voce insere como tratar o erro
    (depois do trow, igual uma variavel),
    inserir uma mensagem ou uma guardar a 
    informacao com uma requisicao ajax, por exemplo. */
    //Ex:
    //throw 10
    //throw true
    //throw 'menasagem'
}

function imprimirnomegritando(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!')//Codigo que potencialmente pode dar erro (aqui foi colocado um erro intencional)
        //Se o codigo acima der erro ele vai para o cath
    } catch (e){
        tratarErroELancar(e)
        //Em seguida ele vai para o throw
    } finally{
        console.log('final')
        //independente de qualquer coisa o finale vai ser executado.
    }
}

/*Tente nao mostrar ao usuario mensagens de stack de infraestrutura,
use algo simples ou que ele possa lhe dar uma dica do problema */