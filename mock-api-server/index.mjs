import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const encoder = new TextEncoder();

// Funcion generada para simular de forma aleatoria una latencia con un máximo y mínimo de tiempo
const randomLatency = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const handlers = [
    http.get('http://localhost:3000/api', () => {

        // Creamos un arreglo con cadenas de texto simulando una conversación o chat
        const chunks = [
            'What do you think about this tech talk? ',
            'To be honest, I really love the content provided. ',
            'Do you have any suggestions for improvements? ',
            'Perhaps he could dive deeper into advanced topics in the next tech talk. ',
            'I agree with you. I will recommend that when the survey is shared with us via email. '
        ];

        const stream = new ReadableStream({
            async start(controller) {
                for (let index = 0; index < chunks.length; index++) {
                    await new Promise((resolve) => setTimeout(resolve, randomLatency(1000, 4000)));
                    controller.enqueue(encoder.encode(chunks[index]));
                }
                controller.close();
            },
        });

        return new HttpResponse(stream, {
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }),
];

// Exportamos el servidor para ser inicializado posteriormente haciendo uso de la configuración provista
export const server = setupServer(...handlers);