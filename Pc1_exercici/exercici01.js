function numero_signe() {
    //capturar contingut de camp "input1"
  
    input1 = document.getElementById("input1").value;
    
  console.log("El numero introduit es " + input1 )
  
    if (input1 > 0) {
      document.getElementById("results").innerHTML = "POSITIU"
    } else {
      if (input1 < 0) {
        document.getElementById("results").innerHTML = "NEGATIU"
      } else {
        document.getElementById("results").innerHTML = "ES ZERO"
      }
    }
  }

function es_numero() {
    //comprueba si el input es un numero

    input = document.getElementById("input1").value;

    if (!isNaN(input)) {
        document.getElementById("results").innerText = "Es un numero";
        
    } else {
        document.getElementById("results").innerText = "No es un numero";
    }

}