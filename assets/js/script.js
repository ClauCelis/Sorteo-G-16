function elegirNombre() {
    // Lista de nombres
    const nombres = [
        "Ángel Eduardo Briceño", "Arnold Vásquez", "Boris Guiñez", "Claudia Celis", 
        "Cristobal Gallegos", "Edgar Pérez", "Edinson Piña", "Francesca Coronado", 
        "Francisca Carrasco", "Gabriel Martínez", "Hans Pizarro", "Helena De la Cruz", 
        "Kerimen Leiva", "Luis Medina", "Marco Torres", "Richard Solar", 
        "Sebastián Sánchez", "Yolanda Hernández"
    ];

    // Selecciona un nombre al azar
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];

    //Selecciona un gif al azar
    const gifs = [
        "./assets/img/flork_1.jpg",
        "./assets/img/flork_2.jpg",
        "./assets/img/flork_3.jpg",
        "./assets/img/flork_4.jpg",
        "./assets/img/flork_5.jpg",
        "./assets/img/flork_6.jpg",
        "./assets/img/flork_7.jpg",
        "./assets/img/flork_8.jpg",
        "./assets/img/flork_al_agua.jpg"
    ];
    const gifAleatorio = gifs[Math.floor(Math.random() * gifs.length)];

    // Obtener el elemento de resultado
    const resultado = document.getElementById("resultado");

    // Mostrar el gif "cargando"
    resultado.innerHTML = '<img style="width: 100px; height: 100px" src="./assets/img/cargando.gif" alt="Cargando..." />';

    // Después de 3000 milisegundos, cambiar el contenido del elemento mostrando nombre y gif aleatorio
    setTimeout(() => {
        resultado.innerHTML = '<br>' +nombreAleatorio + '<br/><br/>' + '<img style="width: 150px; border-radius: 5%" src=" ' + gifAleatorio + '" alt="Gif aleatorio"/>';
    }, 3000);
}