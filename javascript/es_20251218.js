let bookTitle = "Hary Potter";
let bookYear = 1990;
let cathegory = "avventura";
let ranking = 9;
let isRead = true;
let cathegories = ["Thriller", "Horror", "Avventura", "Fantasy"];

/***
 * inserire condizione che verifichi se un libro è stato letto o no.
 * verificare con uno switch la categoria.
 * creare una function stampaLibro che stampi tutte le info del libro a livello testuale.
 */

if (isRead) {
  console.log("Il libro è stato letto.");
} else {
  console.log("Il libro non è stato letto.");
}

switch (cathegory) {
  case "avventura":
    console.log("Il libro è di genere avventura");
    break;

  case "thriller":
    console.log("Il libro è di genere thriller");
    break;

  default:
    console.log("Il libro è di genere sconosciuto");
    break;
}

function stampaLibro(titolo, anno, categoria, voto, letto) {
  let answer = letto ? "Sì" : "No";
  console.log(
    "Nome libro: " +
      titolo +
      ", Anno di pubblicazione: " +
      anno +
      ", Categoria: " +
      categoria +
      ", Voto: " +
      voto +
      ", E' stato letto? " +
      answer
  );
}

/* stampo le 5 variabili */
stampaLibro(bookTitle, bookYear, cathegory, ranking, isRead);

/***
 * Ciclare tutte le categorie dei libri
 */

console.log("Stampa categorie in corso...");
for (let i = 0; i < cathegories.length; i++) {
  console.log("Nome: " + cathegories[i]);
}
console.log("Fine categorie.");

/***
 * let bookTitle = "Hary Potter";
let bookYear = 1990;
let cathegory = "avventura";
let ranking = 9;
let isRead = true;
let cathegories = ["Thriller", "Horror", "Avventura", "Fantasy"];
 */

const book = {
  title: "Il signore degli anelli",
  year: 1960,
  cathegory: "Fantasy",
  ranking: 10,
  read: false,
};

stampaLibro(book.title, book.year, book.cathegory, book.ranking, book.read);

stampaLibro("Piccolo principe", 1970, "Avventura", 7, true);

let books = [
  {
    title: "Lo Hobbit",
    year: 1970,
    cathegory: "Fantasy",
    ranking: 10,
    read: false,
  },
  {
    title: "Il Codice Da Vinci",
    year: 1970,
    cathegory: "Aventura",
    ranking: 7,
    read: true,
  },
  {
    title: "Mangia la polvere",
    year: 1970,
    cathegory: "Thriller",
    ranking: 10,
    read: true,
  },
];

stampaLibro(
  books[1].title,
  books[1].year,
  books[1].cathegory,
  books[1].ranking,
  books[1].read
);
