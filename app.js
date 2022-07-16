function fazerReserva(){
    var data = document.querySelector("#data").value;
    var horas = document.querySelector("#horas").value;
    var ticket = document.getElementById('ticket');

    var valor = horas * 300.0

    if(confirm(`Reserva de ${horas}h para ${data} sai por R$${valor},00. Deseja confirmar a reserva?`)){
        ticket.innerHTML = "Reserva confirmada para " + data + "!"
    }
}