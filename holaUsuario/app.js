const fs = require('fs');
const os = require('os');
console.log('Iniciando app');

const { username, edad } = require('./user')

const saludo = `Hola ${username}, tienes ${edad} años`;
fs.appendFile('saludo.txt', saludo, (err) => {
  err ? console.log('Ha habido un error') : console.log('Todo ok');
});