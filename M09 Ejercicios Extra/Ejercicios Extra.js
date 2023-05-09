/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloDeArreglos = [ ];
   var claves = Object.keys(objeto);
   for (let index = 0; index < claves.length; index++) {
      var clave = claves[index];
      var valor = objeto[clave];
      arregloDeArreglos.push([clave, valor]);
      
   }
   //Object.entries(objeto); //otra forma resumida
   return arregloDeArreglos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const sorted = string.split("").sort().join("");
   var objetoInicial = { };
   for (let index = 0; index < sorted.length; index++) {
      var letra = sorted[index];
      if (letra in objetoInicial) {
         objetoInicial[letra]++
         } else {
            objetoInicial[letra] = 1
            };
   }
   return objetoInicial;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusculas = "";
   var minúsculas = "";
   for (let index = 0; index < string.length; index++) {
      if ((string[index]) === (string[index].toUpperCase())) {
         mayusculas += string[index];
      } else minúsculas += string[index];
      
   }
   return mayusculas+minúsculas
}


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var strInvertido = "";
   var str = frase.split(" ");
   for (let index = 0; index < str.length; index++) {
      strInvertido += str[index].split("").reverse().join("");
      if (index !== str.length-1) {
         strInvertido += " ";
      }
      } 
   return strInvertido  
   }
 
function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroStr = numero.toString();
   var esCapicua = "Es capicua";
   for (let index = 0; index < numeroStr.length; index++) {
      if(numeroStr[index] !== numeroStr[numeroStr.length -1 - index]){
         esCapicua = "No es capicua"
      };   
   }
   return esCapicua
}

/* var num = 12221;
console.log(capicua(num));
 */

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   newString = "";
   for (let index = 0; index < string.length; index++) {
      if((string[index] !== "a") && (string[index] !== "b") && (string[index] !== "c")){
         newString += string[index];
      }       
   }
   return newString;
}

/* var st ="caramelo santo";
console.log( deleteAbc(st))
 */

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings = arrayOfStrings.sort((a,b) => a.length - b.length);
   //arrayOfStrings = arrayOfStrings.sort((a,b) => b.length - a.length); // inverso, de mayor a menor
   return arrayOfStrings

}

/* var ar = ["You", "are", "beautiful", "looking", "ac"];
console.log(sortArray(ar));
 */

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let interseccion = [];
   for (let index = 0; index < array1.length; index++) {
      if (array2.includes(array1[index]) && !interseccion.includes(array1[index])) {
         interseccion.push(array1[index])
         }
      }
   return interseccion   
}

//console.log(buscoInterseccion([1,2,3,4],[3]))

/* 
npm test 09
git add .
git commit -m "Practica 8.5"
git push 
 */


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
