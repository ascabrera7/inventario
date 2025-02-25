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
            {"data": "nombre"},
            {"data": "categoria.nombre"},
            {"data": "imagen"},
            {"data": "stock"},
            {"data": "pvp"},
            {"data": "estado"},
            {"data": "id"},
        ],
        columnDefs: [
            {
                targets: [-5],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    return '<img src="'+data+'" class="img-fluid d-block mx-auto" style="width: 40px; height: 40px;">';
                }
            },
            {
                targets: [-4],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    if(data > 0){
                        return '<span class="badge badge-success">'+data+'</span>'
                    }
                    return '<span class="badge badge-danger">'+data+'</span>'
                }
            },
            {
                targets: [-3],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    return '$'+parseFloat(data).toFixed(3);
                }
            },
            {
                targets: [-2],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    if(data > 0){
                        return '<span class="badge badge-primary"><i class="fas fa-eye"></i></span>'
                    }
                    return '<span class="badge badge-danger"><i class="fas fa-eye-slash"></i></span>'
                }
            },
            {
                targets: [-1],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    var buttons = '<a href="/base/productos/edit/' + row.id + '/" class="btn btn-warning btn-xs btn-flat"><i class="fas fa-edit"></i></a> ';
                    buttons += '<a href="/base/productos/delete/' + row.id + '/" type="button" class="btn btn-danger btn-xs btn-flat"><i class="fas fa-trash-alt"></i></a>';
                    return buttons;
                }
            },
        ],
        initComplete: function (settings, json) {

        }
    });
});
