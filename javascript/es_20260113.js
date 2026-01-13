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
];

for (let i = 0; i < vehicles.length; i++) {
  console.log(
    vehicles[i].brand,
    vehicles[i].model,
    vehicles[i].km,
    vehicles[i].nazionalita
  );
}
