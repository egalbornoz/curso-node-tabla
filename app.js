
const { basename } = require('path');
const { argv } = require('process');
const colors = require('colors');
const { options } = require('yargs');
const { crearTabla } = require('./helpers/multiplicar');
const arg = require('./config/yargs'); 



//const base = 3;
console.clear();
crearTabla(arg.b,arg.l,arg.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));





