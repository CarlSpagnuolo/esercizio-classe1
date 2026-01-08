const filmCategories= ["avventura", "thriller", "comico", "sci-fi", "dramma" ]; 
//ci sono 5 categorie e devo stampare la lunghezza dell'array//
let numberItems= filmCategories.length;
console.log(numberItems);
//aggiungere la categoria horror aggiunge un elemento alla fine//
filmCategories.push("horror")
console.log(filmCategories);
//rimuovo la categoria horror//
filmCategories.pop()
console.log (filmCategories);
filmCategories.pop()
console.log (filmCategories);
//provo il metodo unshift aggiunge un elemento all'inizio//
filmCategories.unshift("fantasy");
console.log (filmCategories);
//provo il metodo shift//
filmCategories.shift();
console.log (filmCategories); 
//provo il metodo splice per togliere, il primo numero rappresenta lo start, il secondo numero gli elementi da rimuovere//
filmCategories.splice(2,1);
console.log (filmCategories);
//provo il metodo splice per aggiungere//
filmCategories.splice (2,0, "romantico");
console.log (filmCategories);
//creare un altro array filmcategories2//
let filmcategories2= ["western", "noir"];
const listaCompleta = filmCategories.concat(filmcategories2);
console.log (listaCompleta);

//provo il metodo indexOf per conoscere la posizione in un elemento//
console.log (filmCategories.indexOf("thriller"));

//creare un funzione che elimini un elemento dall'array tramite un parametro ricevuto//
function eliminaCategoria(nomeCategoria) {
    //cerco il nome della categoria ricevuta dal parametro trovando il suo indice//
    for (let i=0; i < filmCategories.length; i ++ ){
        if (filmCategories[i] == nomeCategoria){
            filmCategories.splice(i,1);
            }
 }
}
    //rimuovo la categoria dall'array usando indice trovato//
    function eliminaCategoria2(nomeCategoria) {
        let indice= filmCategories.indexOf (nomeCategoria)
        filmCategories.splice (indice,1);
        
   }
    //uso la funzione elimina categoria per eliminare la categoria desiderata//
    eliminaCategoria("romantico");
    console.log (filmCategories);
    