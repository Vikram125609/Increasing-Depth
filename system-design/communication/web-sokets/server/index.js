const http = require('http');
const WebSocket = require('ws');
const server = http.createServer();
const wss = new WebSocket.Server({ server });
wss.addListener('connection', (ws, req) => {
    console.log('Client connected');
    ws.on('message', (message) => {
        console.log('Received message from client: ' + message);
        ws.send('Hello from server');
    });
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// const http = require('http');
// const WebSocket = require('ws');
// const server = http.createServer();
// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}
// const customEvents = new MyEmitter();

// const wss = new WebSocket.Server({ server });
// wss.addListener('connection', (ws, req) => {
//     console.log('Client connected');
//     ws.on('message', (message) => {
//         console.log('Received message from client: ' + message);
//         ws.send('Hello from server');
//         customEvents.emit('message_received', message);
//     });
// });

// customEvents.on('message_received', (message) => {
//     console.log('Custom event - message received: ' + message);
// });

// customEvents.on('message_sent', (message) => {
//     console.log('Custom event - message sent: ' + message);
// });

// server.listen(3000, () => {
//     console.log('Server running on port 3000');
// });