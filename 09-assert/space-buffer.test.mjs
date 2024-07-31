import { data } from '../06-buffer/space.mjs';
import assert from 'assert';

// Verificar que el buffer tiene el tamaño correcto
assert.strictEqual(data.length, 5, 'Buffer should have a length of 5 bytes');

// Verificar que el contenido del buffer es 'Hello' (los primeros 5 caracteres de la cadena original)
assert.strictEqual(data, 'Hello', 'Buffer content should be "Hello"');