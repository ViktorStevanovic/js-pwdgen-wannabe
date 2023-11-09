
// Password Generator -- 

const userName = prompt( 'Scrivi il tuo nome')
const userSurname = prompt( 'Scrivi il tuo cognome')
const userColor = prompt( 'Scrivi il tuo colore preferito')

let userPassword = userName + userSurname + userColor + '21'

document.getElementById('new-password').innerHTML = 'La tua nuova password è: ' + userPassword