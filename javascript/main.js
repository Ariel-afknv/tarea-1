document.getElementById('botonClasificar').addEventListener('click', function() {

    let magnitud = document.getElementById('magnitudInput').value;
    let resultado = document.getElementById('resultado');

    if (magnitud < -1.5) {
        resultado.textContent = 'Extremadamente brillante';
    } else if (magnitud < 1.5) {
        resultado.textContent = 'Muy brillante';
    } else if (magnitud < 6.5) {
        resultado.textContent = 'Brillante';
    } else if (magnitud < 10) {
        resultado.textContent = 'Débil';
    } else {
        resultado.textContent = 'No visible';
    }
    
});