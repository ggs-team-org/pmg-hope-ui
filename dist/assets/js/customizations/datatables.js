DataTable.defaults.layout.bottomStart = ['info', 'pageLength'];
DataTable.defaults.layout.topStart = undefined;

$.extend( true, DataTable.ext.classes, {
    container: "dt-container form-inline dt-bootstrap",
    search: {
        input: "form-control input-sm"
    },
    length: {
        select: "form-select form-select-sm"
    },
    processing: {
        container: "dt-processing panel panel-default"
    },
    layout: {
        row: 'row dt-layout-row',
        cell: 'dt-layout-cell',
        tableCell: 'col-12',
        start: 'dt-layout-start col-sm-6',
        end: 'dt-layout-end col-sm-6',
        full: 'dt-layout-full col-sm-12'
    }
} );


DataTable.defaults.layout.topStart = {
    buttons: [
        {
            extend: 'colvis',
            columns: ':not([data-colvis="false"])'
        }
    ]
};


DataTable.Buttons.defaults.dom.button.className = 'btn btn-light btn-sm';
