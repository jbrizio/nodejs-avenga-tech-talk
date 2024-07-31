import process from 'process';

// Importamos el módulo 'child_process' para poder ejecutar comandos del sistema
import { exec } from 'child_process';

// Listamos los archivos del directorio actual mediante el siguiente comando en nuestra terminal
exec('ls -l', (error, stdout, stderr) => {
    // Si ocurre un error durante la ejecución del comando, se maneja aquí
    if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
    }

    // Si hay alguna salida de error, se maneja aquí
    if (stderr) {
        console.error(`Error output: ${stderr}`);
        return;
    }

    // Si el comando se ejecuta correctamente, la salida se maneja aquí
    console.log(`Command output:\n${stdout}`);
});

// Usamos el módulo 'process' para manejar el evento de salida del proceso
process.on('exit', (code) => {
    // Este código se ejecutará justo antes de que el proceso termine
    console.log(`Process about to exit with code: ${code}`);
});