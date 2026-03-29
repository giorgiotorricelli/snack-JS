// Dato un array, fai in modo di trovare attraverso un for un valore specificato dall'utente. 
// Restituisci come risposta un alert o console.log che dica se il valore esiste o meno

// const list = ["oro", "argento", "platino", "rame", "ferro", "diamante"];
// let rispostaUtente = prompt("Controlla se il metallo è nella lista:");

// for (i in list){
    
//     if (rispostaUtente === list[i]) {
//         console.log(`${rispostaUtente} è nella lista.`);
//         break
//     } else if (parseInt(i) === list.length -1 && rispostaUtente !== list[i]) {
//         console.error(`${rispostaUtente} non è nella lista.`);
//     }
    
// }

// Dato un array, fai in modo di trovare attraverso un for un valore specificato dall'utente. 
// Restituisci come risposta un alert o console.log che dica l'indice dell'elemento

// const valori = ["tonno", "carpa", "anguilla", "salmone", "trota"];
// let rispostaUtente = prompt("Controlla se il pesce è nella lista:");

// for (let i = 0; i < valori.length -1, valori[i -1] !== rispostaUtente; i++) { //ho utilizzato il for senza break
    
//     if (rispostaUtente === valori[i]) {
//         console.log(`${rispostaUtente} è nella lista all'indice ${valori.indexOf(rispostaUtente)}`);
//     } 
    

// }


// Dato un array di numeri, scrivi il codice che effettua la somma di tutti i valori. 
// BONUS: fai generare l'array all'utente tramite prompt. 
// nel momento in cui l'utente scrive "SOMMA" restituisci in console o tramite alert la somma di tutti i valori inseriti dall'utente.

// let numeri = [];
// numeri = (prompt("Inserisci i numeri che vuoi sommare divisi da virgole:")).split(",");
// const azione = prompt("Scrivi 'SOMMA' per procedere:");


// if (azione.toLowerCase() === "somma") {
//     let somma = 0
//     for (i in numeri) {
//         somma += parseInt(numeri[i]);
//     }
//     console.log(`La somma dei tuoi numeri è ${somma}`);
// }



// Dati due array, realizza uno script che mostri in console gli elementi comuni ai due array.
// const gruppo1 = ["giallo", "grigio", "nero", "rosso", "verde", "viola"];
// const gruppo2 = ["fucsia", "grigio", "arancione", "lilla", "rosso", "azzurro"];

// for (i in gruppo1) {
//     for (x in gruppo2) {
//         if (gruppo1[i] === gruppo2[x]) {
//             console.log(gruppo1[i]);
            
//         }
//     }
// }

// Dato un array scrivi uno script che conti la frequenza di un valore inserito dall'utente all'interno dell'array.

let dati = [];
let datiContati = [];
dati = (prompt("Inserisci degli elementi nel tuo array divisi da virgole:")).split(",");

for (i in dati) {
    dati.splice(i, 1, dati[i].trim()); //sostituisco il valoro senza spazi (trim) al valore con gli spazi
}

for (x in dati) {
    let counter = 0;
    for (y in dati) {
        if (dati[x] === dati[y]) {
            counter++;
        }
    }

    if (!datiContati.includes(dati[x])) { //se l'elemento non è già stato incluso nei dati contati
        datiContati.push(dati[x]);
        datiContati.push(counter);
    }
    
}

console.log(datiContati);

for (let j = 0; j < datiContati.length; j++) {
    if (typeof(datiContati[j]) === "string") {
        console.log(`${datiContati[j]} appare ${datiContati[j + 1]} volte`);
    }
}

// ciao, ciao, bau, miao, ciao








// Dato un array e un valore inserito dall'utente, restituisci due array, 
// uno che include solo i valori differenti da quello definito e uno con tutte le occorrenze del valore definito.

// Dato un array, scrivi lo script che restituisca in console qual è il valore più comune all'interno dell'array

// Dato un array di numeri, scrivi lo script che restituisca in console il valore minimo e il valore massimo dello stesso array


