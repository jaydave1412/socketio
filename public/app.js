function load(){

    let socket = io();
    let btn = document.getElementById('send');
    let output = document.getElementById('output');
    let handle = document.getElementById('handle');
    let message = document.getElementById('message');
    let feedback = document.getElementById('feedback');
    btn.addEventListener('click',()=>{
        socket.emit('chat',{
            message : message.value,
            handle : handle.value
        });
    });

    message.addEventListener('keypress',()=>{
        socket.emit('typing',{
            name : handle.value
        });
    });

    socket.on('chat',(data)=>{
        console.log(data);
        feedback.innerHTML = ''
        output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
    })

    socket.on('typing',(data)=>{
        feedback.innerHTML = '<p><em>' + data.name + ' is typing a message...</em></p>';
    })
}

window.onload = load