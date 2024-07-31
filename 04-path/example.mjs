// Importamos determinados métodos del módulo 'path'
import { join, dirname, extname, basename } from 'path';
import { fileURLToPath } from 'url';

// Obtenemos la ruta del archivo actual
const file = fileURLToPath('file:///Users/jbrizio/Github/avenga-nodejs-tech-talk/04-path/configFile.json');

// Obtenemos la ruta del directorio actual
const baseDir = dirname(file);

// Construimos la ruta absoluta al archivo de configuración
const configFilePath = join(baseDir, basename(file));
console.log('Configuration file path:', configFilePath);

// Obtenemos la extensión del archivo de configuración
const configExt = extname(configFilePath);
console.log('Configuration file extension:', configExt);

// Obtenemos el nombre base del archivo de configuración (con la extensión)
const configNameWithExt = basename(configFilePath);
console.log('Configuration file name with extension:', configNameWithExt);

// Obtenemos el nombre base del archivo de configuración (sin la extensión)
const configNameWithoutExt = basename(configFilePath, configExt);
console.log('Configuration file name without extension:', configNameWithoutExt);