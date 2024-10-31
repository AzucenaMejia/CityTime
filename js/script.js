document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const ciudad = document.getElementById('ciudad').value;
    window.location.href = `clima.html?ciudad=${ciudad}`;
});

function limpiarFormulario() { 
    document.getElementById(searchForm).reset();
}