import { randomBytes, createCipheriv } from 'crypto';

// Definimos el algoritmo utilizado para el encriptado
export const algorithm = 'aes-256-cbc';

// Llave secreta para el encriptado
export const key = randomBytes(32);

// Inicializamos el vector
export const iv = randomBytes(16);

// Cadena de texto a encriptar
export const input = 'I love Node.js!';

// Encriptamos la cadena de texto haciendo uso de los párametros previamente definidos
const cipher = createCipheriv(algorithm, key, iv);
export let encrypted = cipher.update(input, 'utf8', 'hex');
encrypted += cipher.final('hex');

// Imprimimos por consola el mensaje encriptado
console.log(`Encrypted: ${encrypted}`);
console.log(`Key: ${key.toString('hex')}`);
console.log(`Vector: ${iv.toString('hex')}`);