import process from 'process';

// Obtenemos los argumentos de la línea de comandos
const args = process.argv.slice(2);

// Mostramos por consola los argumentos recibidos
console.log('Arguments received:', args);

// Procesamos cada uno de los argumentos recibidos
args.forEach((arg, index) => {
    console.log(`Argument ${index + 1}: ${arg}`);
});