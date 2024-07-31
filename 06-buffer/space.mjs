import { Buffer } from 'buffer';

// Crear un buffer de 5 bytes
const buffer = Buffer.alloc(5);

// Intentar escribir una cadena más larga que el tamaño del buffer
const bytesWritten = buffer.write('Hello, Node.js!', 'utf8');

// Leer datos del buffer
export const data = buffer.toString('utf8', 0, buffer.length);

// Mostrar el contenido del buffer y el número de bytes escritos
console.log('Buffer content:', data);
console.log('Bytes written:', bytesWritten);