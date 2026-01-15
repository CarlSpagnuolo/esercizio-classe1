// brand, model, km, nazionaità
const vehicles = [
  {
    brand: "fiat",
    model: "panda",
    km: 700,
    nazionalita: "italiana",
  },
  {
    brand: "peugeut",
    model: "3008",
    km: 900,
    nazionalita: "francese",
  },
  {
    brand: "toyota",
    model: "aygo",
    km: 500,
    nazionalita: "giapponese",
  },
  {
    brand: "lancia",
    model: "Y",
    km: 1000,
    nazionalita: "italiana",
  },
];

// stampare tutti i veicoli dell'oggetto
for (let i = 0; i < vehicles.length; i++) {
  console.log(
    vehicles[i].brand,
    vehicles[i].model,
    vehicles[i].km,
    vehicles[i].nazionalita
  );
}

let i = 0;
while (i < vehicles.length) {
  console.log(
    vehicles[i].brand,
    vehicles[i].model,
    vehicles[i].km,
    vehicles[i].nazionalita
  );
  i++;
}

vehicles.forEach((macchina) => {
  console.log(macchina.brand);
  console.log(macchina.model);
  console.log(macchina.km);
  console.log(macchina.nazionalita);
});

// contare le nazionalita delle auto

const arrayNazionalita = [
  { name: "italiana", count: 0 },
  { name: "francese", count: 0 },
  { name: "giapponese", count: 0 },
];

vehicles.forEach((macchina) => {
  console.log("Inizio elaborazione vettura " + macchina.model);
  arrayNazionalita.forEach((item) => {
    if (item.name == macchina.nazionalita) {
      item.count++;
    }
  });

  console.log("Fine elaborazione vettura");
});
console.log(arrayNazionalita);

// funzione che ritorna macchia con piu km

function getKmMax(veicoli) {
  let kmMaggiore = 0;
  //salvare il primo km trovato e dopo fare il confronto con gli altri
  veicoli.forEach((car) => {
    if (car.km > kmMaggiore) {
      kmMaggiore = car.km;
    }
  });
  return kmMaggiore;
}

console.log(getKmMax(vehicles));
