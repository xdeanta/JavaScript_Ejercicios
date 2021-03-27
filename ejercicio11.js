var array = Array();
var par=0;
var impar=0;
for(i = 0; i<5; i++){
	var entry = prompt("Ingrese un numero",)
	array[i]=parseInt(entry)
}
for(i = 0; i<5; i++){
	if(array[i]%2==0){
  par++
  }else{
  	impar++
  }
}
document.write("<p>cantidad de numeros pares:" +par + "</p>")
document.write("<p>cantidad de numeros impares:" +impar + "</p>")
