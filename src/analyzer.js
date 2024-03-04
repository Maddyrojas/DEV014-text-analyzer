const analyzer = {  
  //recuento de palabras
  getWordCount: (text) => {
    const aregloPalabras = text.split(" ");
    let contadorPalabras = 0;
    for (let i = 0; i < aregloPalabras.length; i++) {
      if (aregloPalabras[i]!==" " && aregloPalabras[i]!=="") { //si es diferente a espacio y a vacio quiero que cuente las palabras
        contadorPalabras = contadorPalabras+1;
      }
    }
    return contadorPalabras;
  },
  //recuento de caracteres
  getCharacterCount: (text) => {
    return text.length;
  },
  //recuento de caracteres excluyendo espacios y signos de puntuación
  getCharacterCountExcludingSpaces: (text) => {
    const simbolosDePuntuacion = ",.!?;:(){}[]$&\"'¡¿`-—_…";
    let palabra='';
    for (let i = 0; i < text.length; i++) {
      if (text[i]!==" ") { //si es diferente a vacio
        if (!simbolosDePuntuacion.includes(text[i]) ) {//si la constante no conincide en alguno de sus valores con el caracter
          palabra+= text[i];
        }
      }
    }
    return palabra.length;
  },
  
  /*
  longitud 
  media
  */
  getAverageWordLength: (text) => {
    const aregloPalabras = [];
    let palabraActual='';
    let todasPalabras='';
    let promedio = 0;
    if (text!=="") {
      for (let i = 0; i < text.length; i++) {
        if (text[i]!==" ") { //si es diferente a vacio quiero que concatene
          palabraActual+= text[i];
          if (i===text.length-1) {// si ademas de ser diferente a vacio es el ultimo valor quiero que lo agregue.
            aregloPalabras.push(palabraActual);
            todasPalabras+=palabraActual;
          }
        }
        else{
          if (palabraActual.length>0) {// si valor es espacio y ademas hay palabra con longitud mayor a 0
            aregloPalabras.push(palabraActual);
            todasPalabras+=palabraActual;
            palabraActual='';
          }
        }
      }
      promedio=(todasPalabras.length/aregloPalabras.length).toFixed(2);
      return +promedio;
    }
    else{
      return 0;
    }
  },
  //cantidad de números
  getNumberCount: (text) => {
    const cantidadNumero = [];
    const numero = "1234567890";
    const punto = ".";
    let unionNumero=null;
    for (let i = 0; i < text.length; i++) {
      if (numero.includes(text[i]) ) {//si el caracter es numero
        if (text[i-1]=== " " || i===0){ //si el anterio era espacio [o] si numero actual es el primero
          if (text[i+1]=== " " || i===text.length-1) { 
            /*si el caracter es numero
              si es el primero
              si el siguiente caracter es espacio [o] si el actual carcter es el ultimo*/
            cantidadNumero.push(text[i]);
          } 
          else {
            if (numero.includes(text[i+1]) || punto.includes(text[i+1])) {
              /*si el caracter es numero
                si es el primero
                si no es el ultimo
                si el siguiente es numero [o] punto*/
              unionNumero+= text[i];
            }
          }
          
        }
        else{
          /*Si el caracter es numero
            si NO es primero*/
          if (unionNumero!==null) {
            if (text[i+1]=== " " || i===text.length-1) {
              /*
                Si el caracter es numero
                si NO primero
                palabra no es null
                es ultimo*/
              unionNumero+= text[i];
              cantidadNumero.push(unionNumero);
              unionNumero=null;
            }
            else{
              if (numero.includes(text[i+1]) || punto.includes(text[i+1])) {
                /*Si el caracter es numero
                  si NO es primero
                  palabra no es null
                  No es ultimo
                  siguiente es numero [o] punto*/
                unionNumero+= text[i];
              }
              else{
                unionNumero=null;
              }
            }
          }//if no null
        }
      }//if es numero
      else{
        if (punto.includes(text[i]) && unionNumero!==null) {//si es un punto y ya hay algo antes
          if (i!==text.length-1 && text[i+1]!==" ") {//si no es ultimo
            if (!punto.includes(unionNumero) && numero.includes(text[i+1])){ 
              /* Es punto
                hay numeros antes
                no es ultimo
                no hay otro punto
                y el siguiente es numero*/
              unionNumero+= text[i];
            }
          }
          else{// creo que esto puede ser opcional dependiendo de cada uno
            unionNumero+= text[i];
            cantidadNumero.push(unionNumero);
            unionNumero=null;
          }
        }
      }
       
    }   
    return cantidadNumero.length;
  },
  //suma de todos los números
  getNumberSum: (text) => {
    let sumaTotal = 0;
    const numero = "1234567890";
    const punto = ".";
    let unionNumero='';
    for (let i = 0; i < text.length; i++) {
      if (numero.includes(text[i]) ) {//si el caracter es numero
        if (text[i-1]=== " " || i===0){ //si el anterio era espacio [o] si numero actual es el primero
          if (text[i+1]=== " " || i===text.length-1) { 
            sumaTotal += Number(text[i]);
          } 
          else {
            if (numero.includes(text[i+1]) || punto.includes(text[i+1])) {
              unionNumero+= text[i];
            }
          }
        }
        else{
          if (unionNumero!=='') {
            if (text[i+1]=== " " || i===text.length-1) {
              unionNumero+= ''+text[i];
              sumaTotal += Number(unionNumero);
              unionNumero='';
            }
            else{
              if (numero.includes(text[i+1]) || punto.includes(text[i+1])) {
                unionNumero+= ''+text[i];
              }
              else{
                unionNumero='';
              }
            }
          }//if no null
        }
      }//if es numero
      else{
        if (punto.includes(text[i]) && unionNumero!=='') {//si es un punto y ya hay algo antes
          if (i!==text.length-1 ){
            if(text[i+1]!==" ") {//si no es ultimo
              if (!punto.includes(unionNumero) && numero.includes(text[i+1])){ 
                unionNumero+= ''+text[i];
              }
            }
            else{
              sumaTotal += Number(unionNumero);
              unionNumero='';
            }
          }
          else{
            sumaTotal += Number(unionNumero);
            unionNumero='';
          }
        }
      }
    }//for 
    return sumaTotal;
  },
};

export default analyzer;
