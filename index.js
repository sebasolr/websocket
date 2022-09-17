//Traemos modulos
const { log } = require('console');
const express = require('express');
const path = require('path');
const SocketIO = require('socket.io');

//Definimos la app
const app = express();
//settings
app.set('port', process.env.PORT || 3000);
//static files
app.use(express.static(path.join(__dirname, 'public')));
// iniciamos el servidor 
const server = app.listen(app.get('port'), ()=>{
    console.log('Express server listening on port ', app.get('port'))
})


//websocket
//socket.io necesita una servirdor para funcionar es por eso que al app.listen lo dejamos como variable para luego entregarlo a la const SocketIO.listen
const io = SocketIO(server);

io.on('connection', (socket)=>{
    console.log('new connection', socket.id);

    socket.on('chat:message', (data)=>{
       io.sockets.emit('chat:message', data);    
})
    socket.on('chat:typing', (data)=>{
        socket.broadcast.emit('chat:typing', data);
});
});
//__dirname me trae la direccion donde se encuentra el index, gracias al modulo path podemos hacer que sea compatible en todos los SO usando path.join


