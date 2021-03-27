function analizar_cadena() {
  var cadena = document.getElementById("cadena").value.toLowerCase();
  var contador_letras = new Array(27).fill(0);

  for (var i = 0; i < cadena.length; i++) {
    switch (cadena.charAt(i)) {
      case 'a':
        contador_letras[0]++;
        break;
      case 'b':
        contador_letras[1]++;
        break;
      case 'c':
        contador_letras[2]++;
        break;
      case 'd':
        contador_letras[3]++;
        break;
      case 'e':
        contador_letras[4]++;
        break;
      case 'f':
        contador_letras[5]++;
        break;
      case 'g':
        contador_letras[6]++;
        break;
      case 'h':
        contador_letras[7]++;
        break;
      case 'i':
        contador_letras[8]++;
        break;
      case 'j':
        contador_letras[9]++;
        break;
      case 'k':
        contador_letras[10]++;
        break;
      case 'l':
        contador_letras[11]++;
        break;
      case 'm':
        contador_letras[12]++;
        break;
      case 'n':
        contador_letras[13]++;
        break;
      case 'ñ':
        contador_letras[14]++;
        break;
      case 'o':
        contador_letras[15]++;
        break;
      case 'p':
        contador_letras[16]++;
        break;
      case 'q':
        contador_letras[17]++;
        break;
      case 'r':
        contador_letras[18]++;
        break;
      case 's':
        contador_letras[19]++;
        break;
      case 't':
        contador_letras[20]++;
        break;
      case 'u':
        contador_letras[21]++;
        break;
      case 'v':
        contador_letras[22]++;
        break;
      case 'w':
        contador_letras[23]++;
        break;
      case 'x':
        contador_letras[24]++;
        break;
      case 'y':
        contador_letras[25]++;
        break;
      case 'z':
        contador_letras[26]++;
        break;
    }
  }

  var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var estadisticas = "";

  for (var i = 0; i < letras.length; i++) {
    if (contador_letras[i] > 0) {
      estadisticas = estadisticas + "Letra '" + letras[i] + "': " + contador_letras[i] + "<br>";
    }
  }

  document.getElementById("estadisticas").innerHTML = "<div><br><h3>Estadísticas:</h3>" + estadisticas + "</div>";
}
