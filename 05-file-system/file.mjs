// Importamos solamente la función provista por Node.js para interactuar con archivos.
import { readFile } from 'fs';

// Definimos la ruta del archivo
const filePath = 'example.txt';

// Leemos el contenido del archivo proporcionado
readFile(filePath, 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);
    console.log('File content:', data);
});