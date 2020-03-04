function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        //Nao retorna nada (Nao e interessante). Recomenda retornar um erro, uma valor falso, algo do tipo. Mas nao e interessante retornar nada
        console.log(`Valor acima do permitido: ${area}m2`)
    }else {
        //Aqui retorna
        return area
    }
}

//Passando parametros

console.log(area(2.2)) //Menor que vinte
console.log(area(2)) //NAN, numero veses undefined nao e maior que vinte
console.log(area(2, 3, 17, 22, 44)) //Pega apenas os primeiros, pois sao dois parametros fixos
console.log(area(5, 5)) //Maior que vinte