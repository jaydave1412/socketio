const express = require('express');
let socket = require('socket.io');
const app = express();


app.use(express.static('public'))
// app.get('/',(req,res)=>{
//     res.send("hello")
// })

const server = app.listen(3000,()=>{
    console.log("server running")
})

let io = socket(server);

io.on('connection',(socket)=>{
    console.log("connected",socket.id);
    socket.on('chat',(data)=>{
        console.log(data)
        io.sockets.emit('chat',data);
    });

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    })

})