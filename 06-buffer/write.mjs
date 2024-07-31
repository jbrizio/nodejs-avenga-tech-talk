import { Buffer } from 'buffer';

// Crear un buffer de 45 bytes
const buffer = Buffer.alloc(45);

// Escribir datos en el buffer
buffer.write(`I hope you're enjoying the Node.js tech talk!`, 'utf8');

// Leer datos del buffer
const data = buffer.toString('utf8', 0, buffer.length);

// Mostrar el contenido del buffer
console.log('Buffer content:', data);