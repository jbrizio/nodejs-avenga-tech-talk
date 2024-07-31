import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.readdir(__dirname, (err, files) => {
    const testFiles = files.filter((file) => file.endsWith('.test.mjs'));
    for (const file of testFiles) {
        import(path.join(__dirname, file)).catch((err) => console.error(`Error on ${file}:`, err));
    }
});