const yargs = require('yargs');

const arg = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Especifica el numero base con el que se genera la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Se usa para listar la tabla creada'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'Se usa para indicar hasta donde llega la multiplicacion'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La varible debe ser numerica'
        }
        return true;
    })
    .argv;

    module.exports = arg;