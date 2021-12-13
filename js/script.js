const outputHtml = document.getElementById("output");

// ESERCIZIO MAIL
//Definisco array di chi può effettuare l'accesso
const listEmail = ['mariorossi@gmail.com', 'marioverdi@gmail.com', 'gianniblu@gmail.com'];
let flag = false;
//Chiedo all'utente la propria mail
const userEmail = prompt('Inserisci la tua email:');
//Ciclo for all'interno dell'array per verificarne l'accesso
for (let i = 0; i < listEmail.length; i++) {
    if (userEmail.toLowerCase() === listEmail[i].toLowerCase()) {
        flag = true;
    }
}
//Stampiamo il resoconto dell'accesso 
if (flag) {
    outputHtml.innerHTML += "Accesso effettuato con successo! </br>";
    // console.log('Accesso effettuato con successo!')
} else {
    outputHtml.innerHTML += "Impossibile effettuare l'accesso. </br>";
    // console.log('Impossibile effettuare l\'accesso.')
}

// ESERCIZIO DADI
//1. Generare numero random utente
const humanNumber = Math.floor(Math.random() * 6) + 1;
outputHtml.innerHTML += "Numero utente: " + humanNumber;
//console.log('Numero utente: ' + humanNumber);

//2. Generare numero random computer
const computerNumber = Math.floor(Math.random() * 6) + 1;
outputHtml.innerHTML += "</br> Numero computer: " + computerNumber;
//console.log('Numero computer: ' + computerNumber);

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