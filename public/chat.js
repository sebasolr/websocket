const socket = io();
//dom element
let message = document.getElementById('message');
let username = document.getElementById('username');
let send = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

send.addEventListener('click', ()=>{
    //este emite
    socket.emit('chat:message', {username: username.value, message: message.value})
})
message.addEventListener('keypress', ()=>{
    socket.emit('chat:typing', username.value)
})
//este escucha
socket.on('chat:message',(data)=>{
output.innerHTML += `<p>
<strong>${data.username}</strong> : ${data.message}
</p>`
});

socket.on('chat:typing',(data)=>{
    actions.innerHTML =`<p><em>${data} Esta Escribiendo</em></p>`;
});