
function lanzar(){
    var espacio = document.getElementById("image")
    var aleatorio = parseInt((Math.random() * 6) + parseInt(1));
    //alert("numero aleatorio:"+aleatorio)
    switch(aleatorio){
        case 1:
            espacio.innerHTML="<img src='cara1.jpg' height='200' width='200'>";
            break;
        case 2:
            espacio.innerHTML="<img src='cara2.jpg' height='200' width='200'>";
            break;
        case 3:
            espacio.innerHTML="<img src='cara3.jpg' height='200' width='200'>";
            break;
        case 4:
            espacio.innerHTML="<img src='cara4.jpg' height='200' width='200'>";
            break;
        case 5:
            espacio.innerHTML="<img src='cara5.jpg' height='200' width='200'>";
            break;
        case 6:
            espacio.innerHTML="<img src='cara6.jpg' height='200' width='200'>";
            break;
    }
}