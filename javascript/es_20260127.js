function sommaNumeri(a, b) {
  return a + b;
}
const result = sommaNumeri(1, 2);
console.log(result);

function checkIfItalian(modelloAuto) {
  if (modelloAuto == "fiat") {
    return true;
  } else {
    return false;
  }
}

const result2 = checkIfItalian("fiat");
console.log(result2);

function checkIfTeenager(age) {
  let messaggio = "";
  switch (true) {
    case age >= 18:
      messaggio = "utente è maggiorenne";
      break;
    case age < 18 && age >= 12:
      messaggio = "utente è adolescente";
      break;
    default:
      messaggio = "età non riconosciuta";
  }
  return messaggio;
}

console.log(checkIfTeenager(11));
