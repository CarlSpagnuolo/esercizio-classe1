let model = "peugeot"; //variabile con stringa
let km = 55000; //variabile con valore intero
let nation = "Francia"; //variabile con stringa
let isDeasel = false; //variabile booleana

console.log(model);
console.log("La macchina " + model + " ha " + km + " km ");

let model2 = "ferrari";
let km2 = 30000;
let nation2 = "Italia";
let isDeasel2 = true;

if (nation == "Francia") {
  console.log("La macchina " + model + " è francese.");
} else if (nation == "Italia") {
  console.log("La macchina " + model + " è italiana.");
} else {
  console.log("Nazionalità sconosciuta");
}

switch (km) {
  case 10000:
    console.log("La macchina è nuova");
    break;
  case 20000:
    console.log("La macchina è usata");
    break;
  case 30000:
    console.log("La macchina va tagliandata");
    break;
  case 55000:
    console.log("La macchina è vecchia");
    break;

  case 100000:
    console.log("La macchina è da rottamare");
    break;
  default:
    console.log("Dati non sufficienti");
}

if (km > km2) {
  console.log("La peugeot ha più km");
} else if (km < km2) {
  console.log("La ferrari ha più km");
}

let message = km > km2 ? "La peugeot ha più km" : "La ferrari ha più km";
console.log(message);
console.log(km > km2 ? "La peugeot ha più km" : "La ferrari ha più km");

function checkBrand() {
  console.log("La macchina è una peugeot");
}

checkBrand();

function sommaNumeri(a, b, c) {
  console.log(a + b + c);
}
let x = 7;
let y = 10;

sommaNumeri(x, y);
sommaNumeri(4, 2);
sommaNumeri("carlo", 2, 1);
