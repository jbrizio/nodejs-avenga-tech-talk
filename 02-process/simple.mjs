import process from 'process';

// Mostramos información sobre el proceso actual
console.log('Process ID:', process.pid);
console.log('Process Title:', process.title);
console.log('Node.js Version:', process.version);
console.log('Current Directory:', process.cwd());
console.log('Execution Path:', process.execPath);

// Mostramos por consola todas las variables de entorno
console.log('Environment Variables:', process.env);

// Manejo de eventos del proceso
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

// Saliendo del proceso con un código de salida
process.exit(0);