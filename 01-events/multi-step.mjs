import { EventEmitter } from 'events';

// Definimos una clase que hereda de EventEmitter
export class FoodOrderEmitter extends EventEmitter {
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
export const foodOrderEmitter = new FoodOrderEmitter();

// Registrar listeners para los diferentes pasos del proceso de pedido
foodOrderEmitter.on('orderReceived', (orderDetails) => {
    console.log(`Order received for ${orderDetails.customerName}. Order Number: #${orderDetails.orderNumber}`);
    // Emitir el siguiente evento en el proceso
    foodOrderEmitter.emit('prepareFood', orderDetails);
});

foodOrderEmitter.on('prepareFood', (orderDetails) => {
    console.log(`Preparing food for order number #${orderDetails.orderNumber}. Items: ${orderDetails.items.join(', ')}`);
    // Simular un retraso de 5 segundos en la preparación de la comida
    setTimeout(() => {
        // Emitir el siguiente evento en el proceso
        foodOrderEmitter.emit('foodReady', orderDetails);
    }, 5000);
});

foodOrderEmitter.on('foodReady', (orderDetails) => {
    console.log(`Food ready for order number #${orderDetails.orderNumber}`);
    // Emitir el siguiente evento en el proceso
    foodOrderEmitter.emit('deliverFood', orderDetails);
});

foodOrderEmitter.on('deliverFood', (orderDetails) => {
    console.log(`Delivering food to ${orderDetails.customerName}`);
    // Simular un retraso de 5 segundos en la entrega de la comida
    setTimeout(() => {
        // Emitir el siguiente evento en el proceso
        foodOrderEmitter.emit('orderDelivered', orderDetails);
    }, 5000);
});

foodOrderEmitter.on('orderDelivered', (orderDetails) => {
    console.log(`Order number #${orderDetails.orderNumber} delivered to ${orderDetails.customerName}`);
    // Emitir el siguiente evento en el proceso
    foodOrderEmitter.emit('notifyCustomer', orderDetails);
});

foodOrderEmitter.on('notifyCustomer', (orderDetails) => {
    console.log(`Notification sent to ${orderDetails.customerName}: Your order #${orderDetails.orderNumber} has been delivered.`);
});

// Iniciar el proceso de pedido emitiendo el primer evento
foodOrderEmitter.emit('orderReceived', {
    customerName: 'John Doe',
    orderNumber: '12345',
    items: ['Sushi', 'Salad', 'Soup'],
    totalPrice: 45.50
});