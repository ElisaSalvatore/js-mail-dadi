//Definisco array di chi può effettuare l'accesso
const listEmail = ['mariorossi@gmail.com', 'marioverdi@gmail.com', 'gianniblu@gmailcom'];
let flag = false;
//Chiedo all'utente la propria mail
const userEmail = prompt('Inserisci la tua email:');
//Ciclo for all'interno dell'array per verificarne l'accesso
for (let i = 0; i < listEmail.length; i++) {
    if (userEmail === listEmail[i]) {
        flag = true;
    }
}
//Stampiamo il resoconto dell'accesso 
if (flag) {
    console.log('Accesso effettuato con successo!')
} else {
    console.log('Impossibile effettuare l\'accesso.')
}

