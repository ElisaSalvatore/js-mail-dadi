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
    console.log('Accesso effettuato con successo!')
} else {
    console.log('Impossibile effettuare l\'accesso.')
}

// ESERCIZIO DADI
//Generare numero random utente
const humanNumber = Math.floor(Math.random() * 10);
console.log('Numero utente: ' + humanNumber);
//Generare numero random computer
const computerNumber = Math.floor(Math.random() * 10);
console.log('Numero computer: ' + computerNumber);

if (humanNumber > computerNumber) {
    console.log('Hai vinto!')
} else {
    console.log('Hai perso.')
}