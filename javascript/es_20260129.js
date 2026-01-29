const comix = [];
//toAdd
function toAdd (nome, prezzo, categoria, anno) {
    const nuovoFumetto = {
      nome : nome,
      prezzo : prezzo,
      categoria : categoria, 
      anno : anno
      }
      comix.push (nuovoFumetto);

}
console.log ("inserisco fumetto...");

setTimeout (() => {
 toAdd ("Dilan Dog", 12 , "Horror", "1996")
 console.log ("fumetto inserito");
}, 3000)



toAdd ("RoR", 7, "Shonen", "2020");

console.log ("fumetto inserito");


const ciclo = setInterval(() => {

console.log (comix)

clearInterval (ciclo)
}, 1000)



    
