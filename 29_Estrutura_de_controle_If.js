function soBoanoticia(nota){
    if(nota >= 7)/*condicional*/{
        console.log(`Aprovado com ${nota}`)
    }//So sera chamado se a condicional dentro do parentess for atendida
}

//Forma de executar funcao no console
soBoanoticia(8.1)
soBoanoticia(6.1)

//Ele so executa se for verdade
function seforverdadeeufalo(valor){
    if(valor){
        console.log(`É verdade... ${valor}`)
    }
}

seforverdadeeufalo()
seforverdadeeufalo(null)
seforverdadeeufalo(undefined)
seforverdadeeufalo(NaN)
seforverdadeeufalo('')
seforverdadeeufalo(0)
seforverdadeeufalo(-1)
seforverdadeeufalo(' ')
seforverdadeeufalo('?')
seforverdadeeufalo([])
seforverdadeeufalo([1,2])
seforverdadeeufalo({})

//-------------------------------------------------------------

/*O javscript nao considera sentencas como partede um bloco como no pyton */
//Ele considera apena uma linha
function teste1(num) {
    if(num > 7)
        console.log(num)
}

teste1(6)
teste1(8)

//para mais sentencas e necessario usar chaves

function teste2(num) {
    if(num > 7){
        console.log(num)
        console.log('Final')
    }
}

teste2(5)
teste2(9)

/*O ';' pode ser usado para separar diferentes sentencas de codigo (podem estar na mesma linha)*/

function teste3(num){
    if(num > 7);{
        console.log(num)
    }
}

teste3(4)
teste3(10)