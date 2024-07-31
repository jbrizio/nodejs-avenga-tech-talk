import { Buffer } from 'buffer';

// Crear un buffer a partir de una cadena
const bufferFromString = Buffer.from('Random content to be saved inside the Buffer!');

// Mostrar el contenido del buffer
console.log('Buffer from string:', bufferFromString.toString('utf8'));