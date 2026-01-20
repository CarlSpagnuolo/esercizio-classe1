// QUESTA è UN'APP TODO LIST
// CREA UNA FUNZIONE PER AGGIUNGERE
// CREA UNA FUNZIONE PER ELIMINARE
// CREA UNA FUNZIONE PER MODIFICARE
// CREA UNA FUNZIONE PER STAMPARE
// 1:ID UNIVOCO, 2:NOME ATTIVITà, 3:DESCRIZIONE ATTIVITà, 4:STATO;

const todo = [
  {
    id: 1,
    nomeAttivita: "palestra",
    descrizioneAttivita: "pulire palestra",
    stato: false,
  },
  {
    id: 2,
    nomeAttivita: "palestra",
    descrizioneAttivita: "posare pesi palestra",
    stato: false,
  },
];

function toAdd(a, d) {
  let ultimoId = todo[todo.length - 1].id; //SE L'ARRAY FOSSE VUOTO COME FACCIO?
  todo.push({
    id: ultimoId + 1,
    nomeAttivita: a,
    descrizioneAttivita: d,
    stato: false,
  });
}
function toDelete(toDeleteToDo) {
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].id === toDeleteToDo) {
      todo.splice(i, 1);
      break;
    }
  }
}

function toModify(toModifyToDo) {
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].id === toModifyToDo.id) {
      todo.splice(i, 1, toModifyToDo); //OPPURE todo[i] === toModifyToDo;
      break;
    }
  }
}

function toPrint() {
  console.log(todo);
}

toPrint();

toDelete(1);
toModify({
  id: 2,
  nomeAttivita: "garage",
  descrizioneAttivita: "pulire garage",
  stato: true,
});
toAdd("bagno", "pulire bagno");

toAdd("stanza", "riordinare stanza");

toPrint();
