/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   for (let i = 0; i < array.length; i++) {
      array[i] += 1;
   }
   return array;   
   
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   array.push (elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   array.unshift (elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   return palabras.join (" ");
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   return array.includes(elemento)
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   let suma = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      suma =  suma + arrayOfNums[i];
   }
   return suma;   
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   let suma = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
      suma =  suma + resultadosTest[i];
   }
   return (suma/resultadosTest.length);   
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   let max = -1;
   for (let i = 0; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > max) {
         max = arrayOfNums[i];
      } 
   }
   return (max);   
   
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   var acc = 1
   if (arguments.length === 0) return 0
   else if (arguments.length === 1) return arguments[0]
    else {
      for (let i = 0; i < arguments.length; i++) {
         acc = acc * arguments[i]
      }
      return acc
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   let cant = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         cant ++;
      } 
   }
   return (cant);   

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   if (numeroDeDia===1 || numeroDeDia===7) {
      return("Es fin de semana");
   } else return("Es dia laboral"); 
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   let numeroString = num.toString();
   if (numeroString.charAt() === "9") {
      return true;
   } else return false;
   
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   let comparar = array[0];
   for (let i = 1; i < array.length; i++) {
      if (array[i] !== comparar) {
         return false;
      }
      return true
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   let nuevoArray = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] === "Enero") {
         nuevoArray.push(array[i]);

      } else if (array[i] === "Marzo") {
         nuevoArray.push(array[i])

      } else if (array[i] === "Noviembre") {
         nuevoArray.push(array[i])
      }
   }
      if (nuevoArray.length !== 3) {
         return "No se encontraron los meses pedidos"
      }
   return nuevoArray   
   
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   let tabla6 = [];
   for (let i = 0; i < 11; i++) {
      tabla6.push(i * 6);
   }
   return tabla6;   
   
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   let mayores100 = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         mayores100.push(array[i]);
      }
   }
   return mayores100;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   let array = [];
   for (let i = 0; i < 10; i++) {
      num = num + 2;
      if (num === i) {
         break
      } else {
         array.push(num);
      }
   }
   if (array.length < 10) {
      return "Se interrumpió la ejecución"
   } else {
      return array
   }

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   let array = [];
   for (let i = 0; i < 10; i++) {
      if (i === 5) {
         continue
      } else {
         num = num + 2;
         array.push(num);
      }
   }
   return array
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
