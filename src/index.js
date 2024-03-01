import analyzer from './analyzer.js';


const areaTexto = document.querySelector("textarea");

const palabra = document.querySelector('li[data-testid=word-count]');
const caracteres = document.querySelector('li[data-testid=character-count]');
const caracteresSinEspacios = document.querySelector('li[data-testid=character-no-spaces-count]');
const numeros = document.querySelector('li[data-testid=number-count]');
const suma = document.querySelector('li[data-testid=number-sum]');
const longitudMedia = document.querySelector('li[data-testid=word-length-average]');

const button = document.getElementById("reset-button");

areaTexto.addEventListener("input", function(){
  palabra.innerHTML = 'Cantidad Palabras: '+ analyzer.getWordCount(areaTexto.value);
  caracteres.innerHTML = 'Cantidad Caracteres: ' + analyzer.getCharacterCount(areaTexto.value);
  caracteresSinEspacios.innerHTML = 'Cantidad Caracteres sin Espacio: ' + analyzer.getCharacterCountExcludingSpaces(areaTexto.value);
  numeros.innerHTML = 'Cantidad Numeros: ' + analyzer.getNumberCount(areaTexto.value);
  suma.innerHTML = 'Suma de Numeros: ' + analyzer.getNumberSum(areaTexto.value);
  longitudMedia.innerHTML = 'Longitud Media: ' + analyzer.getAverageWordLength(areaTexto.value);
});

button.addEventListener('click', function(){
  areaTexto.value= "";
  palabra.innerHTML = 'Cantidad Palabras: 0';
  caracteres.innerHTML = 'Cantidad Caracteres: 0';
  caracteresSinEspacios.innerHTML = 'Cantidad Caracteres sin Espacio: 0';
  numeros.innerHTML = 'Cantidad Numeros: 0';
  suma.innerHTML = 'Suma de Numeros: 0';
  longitudMedia.innerHTML = 'Longitud Media: 0';
})
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//acá debes escuchar eventos del DOM, invocar los métodos del objeto analyzer 
//según sea necesario y actualizar el resultado en la UI (interfaz de usuaria).