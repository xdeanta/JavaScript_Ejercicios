var fact = 1
for (i = 5; i > 0 ;i--){
	fact=fact*i
}

document.write("factorial de 5: " + fact + "\n")
fact = 1
while(num != "exit"){
	var num = prompt("Insertar numero para calcular factorial", 1)
	if(num == 0){
		document.write("Resultado del factorial de " + num + ": 1")
	}else{
		for(i=1 ; i <= num; i++){
			fact=fact*i;
		}
		document.write("Resultado del factorial de " + num + ": " + fact + "\n")
		fact=1
	}
}