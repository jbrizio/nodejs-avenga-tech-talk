import { createDecipheriv } from 'crypto';

// Definimos el algoritmo utilizado anteriormente
const algorithm = 'aes-256-cbc';

// Cadena de texto a desencriptar en hexadecimal
const input = '';

// Definimos la llave secreta utilizado anteriormente
const keyHex = '';

// Definimos el valor del vector utilizado anteriormente
const ivHex = '';

// Convertimos las cadenas hexadecimales a buffers
const key = Buffer.from(keyHex, 'hex');
const iv = Buffer.from(ivHex, 'hex');

// Decrypt data
const decipher = createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(input, 'hex', 'utf8');
decrypted += decipher.final('utf8');

// Imprimimos por consola el mensaje desencriptado
console.log('Decrypted:', decrypted);