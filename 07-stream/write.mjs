import { server } from '../mock-api-server/index.mjs';
import { PassThrough } from 'stream';
import http from 'http';
import fs from 'fs';

// Iniciamos el servidor mock
server.listen();

// Creamos una función que replica una aplicación simple de Node.js
async function app() {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/api',
        method: 'GET',
        headers: { 'Accept': 'text/plain' },
    };

    // Efectuamos la solicitud mediante el módulo de HTTP haciendo uso de la función request
    const req = http.request(options, (res) => {

        // Instanciamos un stream PassThrough
        const passThrough = new PassThrough();

        // Definimos donde guardar el contenido del stream recibido
        const writeStream = fs.createWriteStream('output.txt');

        // Conectamos la respuesta HTTP al stream PassThrough y luego guardamos localmente el contenido
        res
            .pipe(passThrough)
            .pipe(writeStream);

        // Leemos los datos del PassThrough y los mostramos por consola
        passThrough.on('data', (chunk) => {
            console.log('Saving the content to the specified file...');
        });
    });

    req.end();
};

app();