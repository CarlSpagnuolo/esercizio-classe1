// APP LIBRERIA
// CREA UNA FUNZIONE PER AGGIUNGERE
// CREA UNA FUNZIONE PER ELIMINARE
// CREA UNA FUNZIONE PER MODIFICARE
// CREA UNA FUNZIONE PER STAMPARE
// 1:ID UNIVOCO, 2:TITOLO, 3:CATEGORIA, 4:isRead, 5:RATING;

const books = [];

// AGGIUNGERE FUNZIONI
function toAdd(toAddBook) {
  // METTO UN CONTROLLO PER VERIFICARE IL PARAMETRO
  if (typeof toAddBook != "object") {
    console.log("ERRORE, DATO NON VALIDO");
    return;
  }
  console.log("Inserimento libro in corso...");
  if (books.length > 0) {
    // L'ARRAY NON è VUOTO
    // PRENDERE ULTIMO ID E INCREMENTARLO DI 1
    let contatore = 0;
    books.forEach((libro) => {
      if (libro.id > contatore) {
        contatore = libro.id;
      }
    });

    console.log("Trovato id più alto: " + contatore);
    const nuovoId = contatore + 1;
    console.log("inserimento nuovo libro con id " + nuovoId);
    books.push({
      id: nuovoId,
      titolo: toAddBook.titolo,
      categoria: toAddBook.categoria,
      isRead: toAddBook.isRead,
      rating: toAddBook.rating,
    });
  } else {
    // L'ARRAY è VUOTO
    books.push({
      id: 1,
      titolo: toAddBook.titolo,
      categoria: toAddBook.categoria,
      isRead: toAddBook.isRead,
      rating: toAddBook.rating,
    });
  }

  console.log("Inserimento libro avvenuto con successo!");
}
// RECUPERARE IL LIBRO CHE HA ID PASSATO E CANCELLARLO DALL'ARRAY

function toDelete(idDaEliminare) {
  //verifico che il parametro sia valido
  if (typeof idDaEliminare !== "number") {
    console.log("errore id passato non valido");
    return;
  }
  console.log("cancellazione In corso per il libro con id " + idDaEliminare);

  //step 1 trovare index dell'libro che ha l'id uguale al parametro id da eliminare
  const index = books.findIndex((libro) => libro.id == idDaEliminare);
  if (index == -1) {
    console.log(" Errore id non trovato ");
    return;
  }
  console.log(index);
  //step 2 usare l'index trovato per eliminare il libro dall'array
  books.splice(index, 1);
  console.log("cancellazione avvenuta");
}
// FUNZIONE PER STAMPARE
function toPrint() {
  //stampare in console i dati di ogni libro
  books.forEach((libro) => {
    const statoLettura = libro.isRead ? "si" : "no";
    console.log(
      "NOME LIBRO: " +
        libro.titolo +
        " nome categoria " +
        libro.categoria +
        " è stato letto? " +
        statoLettura +
        " voto " +
        libro.rating,
    );
  });
}

//FUNZIONE PER MODIFICARE

function toModify(toModifyBook) {
  const index = books.findIndex((libro) => libro.id === toModifyBook.id);
  //OPERATORE TERNARIO
  index === -1
    ? console.log("Errore, id non trovato")
    : books.splice(index, 1, toModifyBook);
  //IF ELSE
  if (index === -1) {
    console.log("Errore, id non trovato");
  } else {
    books.splice(index, 1, toModifyBook);
  }
}

//FUNZIONE PRINCIPALE DEL PROGRAMMA
function main() {
  console.log("---avvio programma---");

  //   AGGIUNGO UN NUOVO LIBRO
  const nuovoLibro = {
    titolo: "Il piccolo principe",
    categoria: "Romanzo",
    isRead: true,
    rating: 4,
  };
  toAdd(nuovoLibro);
  console.log(books);

  toAdd({
    titolo: "Harry Potter",
    categoria: "Fantasy",
    isRead: false,
    rating: 5,
  });

  toAdd({
    titolo: "Inferno",
    categoria: "Thriller",
    isRead: true,
    rating: 4,
  });

  console.log(books);

  toPrint();
  // toDelete(1);

  toModify({
    id: 1,
    titolo: "Carlo Spagnuolo",
    categoria: "Horror",
    isRead: false,
    rating: 5,
  });
  toPrint();

  console.log("---fine programma---");
}

// LANCIO IL PROGRAMMA
main();
