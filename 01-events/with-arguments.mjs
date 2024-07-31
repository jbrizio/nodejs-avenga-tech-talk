import { EventEmitter } from 'events';

// Definimos una clase que hereda de EventEmitter
export class FoodOrderEmitter extends EventEmitter {};

// Creamos una instancia de nuestra clase
const foodOrderEmitter = new FoodOrderEmitter();

// Registramos un listener para el evento 'orderPlaced'
foodOrderEmitter.on('orderPlaced', (orderDetails) => {
    console.log(`Order received!`);
    console.log(`Customer Name: ${orderDetails.customerName}`);
    console.log(`Order Number: ${orderDetails.orderNumber}`);
    console.log(`Items Ordered: ${orderDetails.items.join(', ')}`);
    console.log(`Total Price: $${orderDetails.totalPrice}`);
});

// Emitimos el evento 'orderPlaced' con un objeto de datos que representa un pedido de comida
foodOrderEmitter.emit('orderPlaced', {
    customerName: 'John Doe',
    orderNumber: '12345',
    items: ['Pizza', 'Burger', 'Fries'],
    totalPrice: 29.99
});