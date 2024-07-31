import { foodOrderEmitter } from '../01-events/multi-step.mjs';
import assert from 'assert';

// Verificamos si nuestro emitter incluye los eventos deseados en el orden correcto
const expectedEvents = [
    'orderReceived',
    'prepareFood',
    'foodReady',
    'deliverFood',
    'orderDelivered',
    'notifyCustomer'
];

// Adicionamos un timeout para esperar a que se complete el pedido
setTimeout(() => {
    assert.deepStrictEqual(foodOrderEmitter.emittedEvents, expectedEvents, 'The emitted events are not in the expected order');
}, 15000);