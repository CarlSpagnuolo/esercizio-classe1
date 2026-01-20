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

function toDelete(idDaEliminare) {
  // RECUPERARE IL LIBRO CHE HA ID PASSATO E CANCELLARLO DALL'ARRAY
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

  console.log("---fine programma---");
}

// LANCIO IL PROGRAMMA
main();
