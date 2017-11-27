var resultado = document.getElementById("mostrarResultado"); /* hay que crear un elemento con esa id donde se mostrara el resultado */

function devolverLocalizacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarPosicion);
    } else { 
        resultado.innerHTML = "Tu navegador no soporta la geolocalizacion.";
    }
}

function mostrarPosicion(posicion) {
    if (posicion.coords.latitude > 36 && posicion.coords.latitude < 42 && posicion.coords.longitude > -8 && posicion.coords.longitude < 0){
        resultado.innerHTML = "Latitude: " + posicion.coords.latitude + 
        "<br>Longitude: " + posicion.coords.longitude + " con una precision de: "+ posicion.coords.accuracy + " metros. Por lo que debes de ser espanol!<br>";
    } else {
        resultado.innerHTML = "Latitude: " + posicion.coords.latitude + 
        "<br>Longitude: " + posicion.coords.longitude + " con una precision de: "+ posicion.coords.accuracy + " metros. Por lo que debes de ser de fuera de espana<br>";
    }
}