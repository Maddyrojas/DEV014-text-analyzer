# Bienvenid@ a mi proyecto Analizador de texto
Te saluda:

← `Madelyn Rojas | Costa Rica`

## Aquí encontraras una descripción de comó puedes utilizar esta plataforma

Realmente es una plataforma sencilla donde encontraras una única ventana llamada: Analizador de Texto

En esta ventanas el usuario podrá ingresar cualquier texto que desee y podra verificar de forma imediata a la cantidad de carácteres y palabras que contiene, así mismo la cantidad de carácteres excluyendo espacios y signos de puntuación, por otro lado también va a detectar los numero que ingreses en el texto y te dara un resultado tanto de la cantidad de números como de su suma.

Además, el usuario tendrá disponible un boton con el cual podra refrescar el cuadro de texto y los resultados anteriores para volver a ingresar otro texto, si así lo desea.

Puedes acceder directamente con el siguiente enlace:
[Blank Website](https://maddyrojas.github.io/DEV014-text-analyzer/src/)

## Introducción a la aplicación
Como parte de un enfoque al cliente, he diseñado esta aplicación para ser utilizada por estudiantes universitarios con idioma español, para que puedan realizar el conteo de las palabras que deseen citadar en sus documentos de investigación.

## funcionalidad

Como bien se menciona anteriormente la aplicacion muestras resultados inmediatos al usuario, por lo que a continuación voy a explicar detalladamente cada una de estas funciones

← #1 Cantidad Palabras

```
getWordCount: (text) => {
    const palabra=text.toString();
    const aregloPalabras = palabra.split(" ");
    let contadorPalabras = 0;
    for (let i = 0; i < aregloPalabras.length; i++) {
      if (aregloPalabras[i]!==" ") { 
        contadorPalabras = contadorPalabras+1;
      }
    }
    return contadorPalabras;
  }
```

← #2 Cantidad Carácteres

```
getCharacterCount: (text) => {
    return text.length;
  }
```

← #3 Cantidad Carácteres Sin Espacios

```
getCharacterCountExcludingSpaces: (text) => {
    const simbolosDePuntuacion = ",.!?;:(){}[]$&\"'¡¿`-—_…";
    let palabra='';
    for (let i = 0; i < text.length; i++) {
      if (text[i]!==" ") { 
        if (!simbolosDePuntuacion.includes(text[i]) ) {
          palabra+= text[i];
        }
      }
    }
    return palabra.length;
  }
```

← #4 Cantidad Numeros

```
getNumberCount: (text) => {
    const cantidadNumero = [];
    const numero = "1234567890";
    const punto = ".";
    let unionNumero=null;
    for (let i = 0; i < text.length; i++) {
      if (numero.includes(text[i]) ) {
        if (text[i-1]=== " " || i===0){ 
          if (text[i+1]=== " " || i===text.length-1) { 
            cantidadNumero.push(text[i]);
          } 
          else {
            if (numero.includes(text[i+1]) || punto.includes(text[i+1])) {
              unionNumero+= text[i];
            }
          }
        }
        else{
          /*Si el caracter es numero
            si NO es primero*/
          if (unionNumero!==null) {
            if (text[i+1]=== " " || i===text.length-1) {
              unionNumero+= text[i];
              cantidadNumero.push(unionNumero);
              unionNumero=null;
            }
            else{
              if (numero.includes(text[i+1]) || punto.includes(text[i+1])) {
                unionNumero+= text[i];
              }
              else{
                unionNumero=null;
              }
            }
          }
        }
      }
      else{
        if (punto.includes(text[i]) && unionNumero!==null) {
          if (i!==text.length-1 && text[i+1]!==" ") {
            if (!punto.includes(unionNumero) && numero.includes(text[i+1])){ 
              unionNumero+= text[i];
            }
          }
          else{
            unionNumero+= text[i];
            cantidadNumero.push(unionNumero);
            unionNumero=null;
          }
        }
      }
    }   
    return cantidadNumero.length;
  }
```

← #5 Suma de Numeros

```
getNumberSum: (text) => {
    let sumaTotal = 0;
    const numero = "1234567890";
    const punto = ".";
    let unionNumero='';
    for (let i = 0; i < text.length; i++) {
      if (numero.includes(text[i]) ) {
        if (text[i-1]=== " " || i===0){ 
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
          }
        }
      }
      else{
        if (punto.includes(text[i]) && unionNumero!=='') {
          if (i!==text.length-1 ){
            if(text[i+1]!==" ") {
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
  }
```

← #6 Longitud Media

```
getAverageWordLength: (text) => {
    const aregloPalabras = [];
    let palabraActual='';
    let todasPalabras='';
    let promedio = 0;
    if (text!=="") {
      for (let i = 0; i < text.length; i++) {
        if (text[i]!==" ") {
          palabraActual+= text[i];
          if (i===text.length-1) {
            aregloPalabras.push(palabraActual);
            todasPalabras+=palabraActual;
          }
        }
        else{
          if (palabraActual.length>0) {
            aregloPalabras.push(palabraActual);
            todasPalabras+=palabraActual;
            palabraActual='';
          }
        }
      }
      promedio=(todasPalabras.length/aregloPalabras.length).toFixed(2);
      return +promedio;
    }
  }
```
## Decisiones de diseño que tomaron.
Al tener como mercado meta a adultos universitarios se eligió colores como el azul para el fondo.

Para el título se usó el color celeste de forma que resalte con el fondo, además se añadió sombra casi blanca para hacer un efecto de 3D y que este resalte. 

El boton se incluyó en esta misma zona del fondo azul para resaltarlo con color verde claro, contrastando con los colores usados anteriormente.

En el area del cuadro de texto se considera vital el fondo blanco para que el texto ingresado pueda ser completamente visible y se incluye un efecto de enfoque cuando sea seleccionado para escribir, además se agrega un color de fondo al nodo que lo contiene para que de esta forma pueda crear un efecto de marco y a este nodo se agrega sombra para efecto 3D. El texto que es agregado por el usuario se verá de color morado muy oscuro para crear conexion con la parte inferior de la página. 

En la parte inferior se encontran los resultados que se mostran al usuario, cada uno con su respectivo Modelo de Caja, distribuidos en bloques y lineas, y un radio de esquinas con diseño personalizado para verse diferente. Así mismo el color que se escoge es personal favorito, un tono morado con gradiente para crear un efecto de resalte en el centro. Misma tonalidad que se utiliza en el pie de la página para el nombre del autor solo que este texto si incluye sombra al igual que le titulo pero en este caso, con la diferencia de ser sombra morado oscuro mismo color que las letras del cuadro de texto.