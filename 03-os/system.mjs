// Importamos algunas funciones del módulo 'os'
import { type, platform, arch, freemem, totalmem } from 'os';

// Obtenemos y mostramos el nombre del sistema operativo
const osType = type();
console.log('OS Type:', osType);

// Obtenemos y mostramos la plataforma del sistema operativo
const osPlatform = platform();
console.log('OS Platform:', osPlatform);

// Obtenemos y mostramos la arquitectura de la CPU
const cpuArch = arch();
console.log('CPU Architecture:', cpuArch);

// Obtenemos y mostramos la cantidad de memoria libre en el sistema (en bytes)
const freeMemory = freemem();
console.log('Free Memory:', freeMemory, 'bytes');

// Obtenemos y mostramos la cantidad total de memoria en el sistema (en bytes)
const totalMemory = totalmem();
console.log('Total Memory:', totalMemory, 'bytes');