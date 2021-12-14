const outputHtml = document.getElementById("output");

// ESERCIZIO MAIL
//Definisco array di chi può effettuare l'accesso
const listEmails = ['mariorossi@gmail.com', 'marioverdi@gmail.com', 'gianniblu@gmail.com'];
//Chiedo all'utente la propria mail
const userEmail = prompt('Inserisci la tua email:');

/*
// 1^ SOLUZIONE => FOR
let emailTrovata = false;
//Ciclo for all'interno dell'array per verificarne l'accesso
for (let i = 0; i < listEmails.length; i++) {
    if (userEmail.toLowerCase() === listEmails[i].toLowerCase()) {
        emailTrovata = true;
    }
}
//Stampiamo il resoconto dell'accesso 
if (emailTrovata) {
    outputHtml.innerHTML += "Accesso effettuato con successo! </br>";
    // console.log('Accesso effettuato con successo!')
} else {
    outputHtml.innerHTML += "Impossibile effettuare l'accesso. </br>";
    // console.log('Impossibile effettuare l\'accesso.')
}
*/


//2^ SOLUZIONE => INCLUDES
// includes torna un booleano (TRUE|FALSE)
if (listEmails.includes(userEmail)) {
    console.log('Email trovata con includes!')
} else {
    console.log('Email NON trovata con includes!')
}
 

// ESERCIZIO DADI
// Un formula generale che genera un numero random tra un min e max, compresi gli estremi.
// Math.floor(Math.random() * ((max + 1) - min)) + min => include minimo e massimo. Funziona anche nel caso in cui il mino non sia 1.
// Math.round(Math.random() * (max - min)) + min;

//1. Generare numero random utente
const humanNumber = Math.floor(Math.random() * (6 - 1)) + 1;
outputHtml.innerHTML += "Numero utente: " + humanNumber;

//2. Generare numero random computer
const computerNumber = Math.floor(Math.random() * (6 - 1)) + 1;
outputHtml.innerHTML += "</br> Numero computer: " + computerNumber;

console.log ('Numero utente:', humanNumber, 'Numero computer:', computerNumber);


if (humanNumber < computerNumber) {
    outputHtml.innerHTML += "</br> Hai perso.";
    //console.log('Hai perso.')
} else if (humanNumber > computerNumber) {
    outputHtml.innerHTML += "</br> Hai vinto!";
    //console.log('Hai vinto!')
} else {
    outputHtml.innerHTML += "</br> Pareggio.";
    //console.log('Pareggio.')
}