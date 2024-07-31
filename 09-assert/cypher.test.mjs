import { key, iv, encrypted } from '../08-crypto/cypher.mjs'; 
import assert from 'assert';

// Verificamos que la configuración de nuestro encriptador sean las correctas
assert.strictEqual(typeof encrypted, 'string', 'Encrypted output should be a string');
assert.match(encrypted, /^[0-9a-f]+$/, 'Encrypted output should be a hex string');
assert.strictEqual(key.length, 32, 'Key should be 32 bytes long');
assert.strictEqual(iv.length, 16, 'IV should be 16 bytes long');