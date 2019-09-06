// Comando para establecer la conexión 
var socket = io();
var label =$('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

// Son para escuchar procesos
socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor');
});

// Escuchar información 
socket.on('estatoActual', function(resp){
    label.text(resp.actual);
    console.log(resp.actual);
});

$('button').on('click', function(){
    socket.emit('siguienteTicket',null, function(resp){
        label.text(resp);
    });
});