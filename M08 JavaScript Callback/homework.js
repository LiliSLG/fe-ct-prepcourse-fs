/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   let arreglo = nombre.split("");
   arreglo[0] = arreglo[0].toUpperCase();
   return arreglo.join("");
}

/* let nombre="mario";
console.log (nombre.split(""));
console.log (mayuscula("mario"));
 */

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
/*    let sumaArreglo = 0;
   for (let index = 0; index < arrayOfNumbers.length; index++) {
      sumaArreglo += arrayOfNumbers[index];
   }
   cb (sumaArreglo)
 */
   cb (arrayOfNumbers.reduce((i,el)=> i + el, 0));
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (let index = 0; index < array.length; index++) {
      cb (array [index]);
      
   }
  // array.forEach(el => cb(el)); //otra forma
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var nuevoArreglo = [];
   for (let index = 0; index < array.length; index++) {
      nuevoArreglo.push(cb(array[index]));
      
   }
   return nuevoArreglo;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   arreglosA = [];
   for (let index = 0; index < arrayOfStrings.length; index++) {
      if (arrayOfStrings[index][0] === "a") {
         arreglosA.push(arrayOfStrings[index])
      }
      
   }
   return arreglosA;
}


/* var myStrings = ["uno", "dos", "tres", "ahora"];
console.log (myStrings);
console.log (myStrings[2]);
console.log (myStrings[2].charAt(2));
console.log (myStrings[2][2]);
 */

/* git add .
git commit -m "Practica 8.5"
git push 
 */


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
