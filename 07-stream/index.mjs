import { server } from '../mock-api-server/index.mjs';
import { PassThrough } from 'stream';
import http from 'http';

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

    // Conectamos la respuesta HTTP al stream PassThrough
    res.pipe(passThrough);

    // Leemos los datos del PassThrough y los mostramos por consola
    passThrough.on('data', (chunk) => {
      console.log(chunk.toString());
    });
  });

  req.end();
};

app();