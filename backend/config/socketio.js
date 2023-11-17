const dotenv = require('dotenv');
dotenv.config();

const SOCKETS_PORT = process.env.SOCKETS_PORT || 3000

const io = require('socket.io')(SOCKETS_PORT, {
    path: '/socket.io',
    serveClient: true,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

io.on('connection', (socket) => {
    console.log('🔌 Socket - Client connection established 🔌');
    socket.emit('Connected to sockets');
    socket.on('disconnect', () => {
        console.log('🧏 Socket connection closed 🧏');
    });
});
