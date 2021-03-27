function esPar(numero){
    var res
    if(numero%2 == 0){
        res="Es Par"
    }else{
        res="Es Impar"
    }
    return res
}

var ent=prompt("Inserte numero", 0)

alert(esPar(ent))