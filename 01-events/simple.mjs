import { EventEmitter } from 'events';

// Definimos una nueva clase que hereda de EventEmitter
export class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.emittedEvents = [];
    }

    emit(event, ...args) {
        this.emittedEvents.push(event);
        return super.emit(event, ...args);
    }
};

// Creamos una instancia de nuestra clase
export const myEmitter = new MyEmitter();

// Registramos un listener para el evento 'dummyEvent'
myEmitter.on('dummyEvent', () => {
    console.log('A dummy event was caught!');
});

// Emitimos el evento 'dummyEvent'
myEmitter.emit('dummyEvent');