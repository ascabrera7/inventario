$(function () {
    $('#data').DataTable({
        responsive: true,
        autoWidth: false,
        destroy: true,
        deferRender: true,
        ajax: {
            url: window.location.pathname,
            type: 'POST',
            data: {
                'action': 'searchdata'
            },
            dataSrc: ""
        },
        columns: [
            {"data": "position"},
            {"data": "libro.titulo"},
            {"data": "lector.nombres"},
            {"data": "fecha9"},
            {"data": "fecha8"},
            {"data": "estado"},
            {"data": "id"},
        ],
        columnDefs: [
            {
                targets: [-2],
                class: 'text-center',
                orderable: false,
                
                render: function (data, type, row) {
                    if(data > 0){
                        return '<span class="badge badge-success">'+'Entregado'+'</span>'
                    }
                    return '<span class="badge badge-primary">'+'Recibido'+'</span>'

                }
            },
            {
                targets: [-1],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    var buttons = '<a href="/base/reserva/edit/' + row.id + '/" class="btn btn-warning btn-xs btn-flat"><i class="fas fa-edit"></i></a> '
                    buttons += '<a href="/base/reserva/delete/' + row.id + '/" type="button" class="btn btn-danger btn-xs btn-flat"><i class="fas fa-trash-alt"></i></a>';
                    return buttons;
                }
            },
        ],
        initComplete: function (settings, json) {
            const input=document.getElementById("estadoReserva");
    input.addEventListener("change",(event)=>{
        console.log("eventoAqui",event.target.value)
        console.log(typeof(event.target.value))
        
    })
        }
    });
    
});
