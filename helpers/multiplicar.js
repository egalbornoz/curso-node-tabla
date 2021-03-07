const fs = require('fs');
const { argv } = require('process');
const colors = require('colors');
const crearTabla = async (base=1, list=false, hasta=10) => {

    try {

      
        let salida = '';
        for (let i = 1; i <=hasta; i++) {
            const sig = colors.white('=')
            salida += (`${base} X ${i}  =    ${base * i}\n`);
        }
        if (list) {
            console.log('========================================================'.blue)
            console.log('       Tabla de Multiplicar del: '.white, base);
            console.log('========================================================'.blue)
            console.log(salida.green); 
        }

        fs.writeFileSync(`./salida/taba-${base}.txt`,salida);
        return `taba-${base}.txt`;
    } catch (err) {
        throw err;
    }
}
module.exports = {
    crearTabla

};