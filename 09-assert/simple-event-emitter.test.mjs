import { myEmitter } from '../01-events/simple.mjs';
import assert from 'assert';

// Verificamos si nuestro emitter incluye el evento deseado
assert(myEmitter.emittedEvents.includes('dummyEvent'), 'dummyEvent not is included in the event emitter');