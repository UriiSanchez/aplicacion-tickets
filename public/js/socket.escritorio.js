// Comando para establecer la conexión 
var socket = io();

var searchParams = new URLSearchParams(window.location.search);
var label = $('small');

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}
var escritorio = searchParams.get('escritorio');
console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);
// // Escuchar información 
// socket.on('estatoActual', function(resp){
//     label.text(resp.actual);
//     console.log(resp.actual);
// });


$('button').on('click', function(){
    socket.emit('atenderTicket',{escritorio: escritorio}, function(resp){
        if(resp === 'No hay tickets')
        {
            alert('No hay más tickets');
            label.text(resp);
            return;
        }
        else{
        label.text('ticket '+ resp.numero);}
    });
});


