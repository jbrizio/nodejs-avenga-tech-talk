import { readFile } from 'fs';

// Definimos la ruta del archivo
const filePath = 'employees.csv';

// Definimos el nombre a buscar
const nameWanted = 'Jonathan Brizio';

// Leemos el archivo CSV
readFile(filePath, 'utf8', (err, data) => {
  if (err) return console.error('Error reading the file of employees:', err);

  // Dividimos el contenido del archivo en filas
  const rows = data.split('\n');

  // Filtramos las filas para contar cuántas veces aparece el nombre buscado
  const count = rows.filter((row) => row.trim() === nameWanted).length;

  // Mostramos el resultado en la consola
  console.log(`There are ${count} employee/s named ${nameWanted}.`);
});