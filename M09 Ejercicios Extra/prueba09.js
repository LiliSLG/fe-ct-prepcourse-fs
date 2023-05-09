/* const string = "liliSOY";
const sorted = string.split("").sort().join("");

console.log (string);
console.log (sorted);

var objetoInicial = {};
for (let index = 0; index < sorted.length; index++) {
    if ((sorted[index]) in objetoInicial) {
        objetoInicial[(sorted[index])]++
    } else {objetoInicial[(sorted[index])]= 1};
    
}

console.log (objetoInicial);
console.log (Object.entries(objetoInicial));


var mayusculas = "";
var minúsculas = "";
for (let index = 0; index < string.length; index++) {
   if ((string[index]) === (string[index].toUpperCase())) {
      mayusculas += string[index];
   } else minúsculas += string[index];
   
}
console.log(mayusculas+minúsculas)
 */
const frase = "soy del campo";

var strInvertido = "";
var str = frase.split("");
console.log(str);
var str = frase.split(" ");
console.log(str);
for (let index = 0; index < str.length; index++) {
   strInvertido += str[index].split("").reverse().join("");
   console.log(index)
   if (index !== str.length-1) {
      strInvertido += " ";
      console.log(index)
   }
   } 
console.log(strInvertido)

