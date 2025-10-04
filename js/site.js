function initializeDataTable(tableId, columns, data) {
    // Check if the DataTable instance already exists. If so, destroy it.
    // This is crucial for re-running the query without getting an error.
    if ($.fn.DataTable.isDataTable('#' + tableId)) {
        $('#' + tableId).DataTable().destroy();
        // Also, empty the table headers to prevent columns from duplicating on re-init
        $('#' + tableId + ' thead').empty();
    }

    $('#' + tableId).DataTable({
        columns: columns, // Defines the table headers and which data property to use
        data: data,       // The array of objects to display in the table

        // --- Optional but recommended features ---
        responsive: true, // Makes the table work well on mobile devices
        paging: true,     // Enables pagination
        searching: true,  // Enables the search box
        info: true,       // Shows "Showing 1 to X of Y entries"

        // --- BUILT-IN EXPORT BUTTONS ---
        dom: 'Bfrtip', // This special string tells DataTables where to render the Buttons ('B')
        buttons: [
            'copy', 'csv', 'excel'
        ]
    });
} 