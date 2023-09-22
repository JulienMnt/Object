/**             OBJECT
 * 
 * Declarer un Objet student avec name , favoriteFood et city 
 * 
 * Recuperer le nombre de caracteres dans chaues proprieter puis les additionner pour obtenir un nombre 
 * 
 * Si le nombre pair afficher dans la console "pair"
 * Si le nombre est impair afficher dans la console "impaire"
 * 
 * Plusieurs solutions possibles 
 * Object.keys()=> recuperer les proprieter=s 
 * Object.values() => recuperer les valeurs
 * 
 */
"use strict";

let student = {
    name:"Julien", favoriteFood:"Pates", city:"Paris"
}
let nombre = Object.values(student);
let count = nombre.reduce((acc,value)=>acc+CSSMathValue.length,0);
console.log(count);
