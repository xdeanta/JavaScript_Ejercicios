function Mayus(cadena){
    var mas = cadena.toUpperCase()
    var mis = cadena.toLowerCase()
    var res;
    if(cadena == mas){
        res = "Esta compuesto por mayusculas";
    }else{
        if(cadena == mis){
            res = "Esta compuesto por minusculas";
        }else{
            res = "Es combinación de mayusculas y minusculas"
        }
    }
}

var ent = prompt("Introduzca cadena:", null)

alert(Mayus(ent))